<script lang="ts">
  import { defineComponent } from 'vue';

  import { Add } from '@vicons/ionicons5';
  import { mapGetters } from 'vuex';
  import { AUTH_STORE } from '@/constants';
  import { firebase_db } from '@/config';
  import { onValue, ref, set } from 'firebase/database';

  type Doc = {
    key: string;
    value: string;
  };

  export default defineComponent({
    name: 'RoomsPage',
    components: { Add },
    setup() {
      return {
        refDb: ref(firebase_db, 'rooms/'),
      };
    },
    data: () => ({
      input: '',
      loading: false,
      messages: [],
      rooms: [] as any[],
      username: '',
      modalCreateRoom: false,
    }),
    computed: {
      ...mapGetters([AUTH_STORE.GETTERS.USER_INFO]),
      chats() {
        return this.messages.join('\n') + '\n';
      },
    },
    watch: {
      modalCreateRoom(val) {
        console.log('show val :', val);
      },
    },
    created() {
      onValue(this.refDb, (snapshot) => {
        this.rooms = [];
        snapshot.forEach((doc) => {
          let item = {} as Doc;

          item.value = doc.val();
          item.key = `${Math.floor(Math.random() * 100000)}`;
          this.rooms.push(item);
        });
        console.log('show rooms :', this.rooms);
      });
    },
    mounted() {
      this.username = this.USER_INFO?.email || '--';
    },
    methods: {
      submitCallback() {
        this.$emit('onSubmit');
      },
      onChange(val: string) {
        this.input = val;
      },
      cancelCallback() {
        this.$emit('onCancel');
      },
      onCreateRoom() {
        // check exist
        this.loading = true;
        set(this.refDb, {
          [`room_name_${Date.now()}`]: this.input,
          created: new Date(),
        })
          .then(() => {
            this.modalCreateRoom = false;
            this.loading = false;
          })
          .catch((e) => {
            console.log('showww e : ', e);
            this.loading = false;
          });
      },
    },
  });
</script>
<template>
  <div class="w-1/3 mx-auto text-center">
    <n-gradient-text
      gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
      class="text-2xl py-10"
    >
      Rooms Page
    </n-gradient-text>
    <div class="flex items-center justify-start">
      <n-button
        icon-placement="left"
        type="success"
        @click="modalCreateRoom = true"
      >
        <template #icon>
          <n-icon><add /></n-icon>
        </template>
        Create Room
      </n-button>
    </div>
    <n-list bordered>
      <n-list-item v-for="i in 5" :key="i">
        Hello {{ i }}
        <template #suffix>
          <n-button round>Chat now</n-button>
        </template>
      </n-list-item>
    </n-list>

    <n-modal
      v-model:show="modalCreateRoom"
      preset="dialog"
      @on-after-leave="cancelCallback"
      @on-esc="cancelCallback"
    >
      <template #header>
        <div>Create Room</div>
      </template>
      <n-input
        v-model="input"
        type="text"
        placeholder="room name"
        round
        @change="onChange"
      />
      <template #action>
        <div class="flex justify-between items-center w-full">
          <n-gradient-text
            gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
          >
            {{ username }}
          </n-gradient-text>
          <n-button
            :disabled="loading"
            :loading="loading"
            icon-placement="left"
            type="success"
            @click="onCreateRoom"
          >
            Create
          </n-button>
        </div>
      </template>
    </n-modal>
  </div>
</template>
<style lang="less"></style>
