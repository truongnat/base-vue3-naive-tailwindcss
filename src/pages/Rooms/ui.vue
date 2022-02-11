<script lang="ts">
  import { defineComponent } from 'vue';

  import { Add } from '@vicons/ionicons5';
  import { mapGetters } from 'vuex';
  import { AUTH_STORE, PagesKey } from '@/constants';
  import {
    createDocChat,
    createFirebaseMember,
    createFirebaseRoom,
    getRoomsByUserId,
    sendFirebaseMessage,
  } from '@/services';
  import { ChatMember, ChatMessage, RoomChat } from '@/@types';
  import { useLoadingBar, useMessage } from 'naive-ui';
  import { useI18n } from 'vue-i18n';

  export default defineComponent({
    name: 'RoomsPage',
    components: { Add },
    setup() {
      const message = useMessage();
      const { t } = useI18n();
      const loadingBar = useLoadingBar();

      return {
        message,
        t,
        loadingBar,
      };
    },
    data: () => ({
      input: '',
      loading: false,
      username: '',
      modalCreateRoom: false,
      rooms: [] as RoomChat[],
    }),
    computed: {
      ...mapGetters([AUTH_STORE.GETTERS.USER_INFO]),
    },
    watch: {
      //
    },
    created() {
      this.fetchRooms();
    },
    mounted() {
      this.username = this.USER_INFO?.email || '--';
    },
    methods: {
      onChange(val: string) {
        this.input = val;
      },

      cancelCallback() {
        this.modalCreateRoom = false;
      },

      fetchRooms() {
        this.loadingBar.start();
        getRoomsByUserId(this.USER_INFO.uid)
          .then((data) => {
            this.rooms = data;
            this.loadingBar.finish();
          })
          .catch(() => {
            this.loadingBar.error();
          });
      },
      async onCreateRoom() {
        this.loading = true;
        const host: ChatMember = {
          avatar: '',
          email: this.USER_INFO.email,
          uid: this.USER_INFO.uid,
          name: this.USER_INFO.email,
        };
        const sender: ChatMember = {
          avatar: '',
          email: 'admin@gmail.com',
          name: 'Admin',
        };

        createFirebaseRoom({
          name: this.input,
          avatar: '',
          lastMessage: 'Welcome to room',
          host,
          hostId: this.USER_INFO.uid,
          createdAt: new Date(),
          updatedAt: new Date(),
          members: {
            [Date.now()]: host,
          },
        })
          .then(async (result) => {
            this.message.success(this.t('success.create_room'), {
              closable: true,
              duration: 5000,
            });
            this.fetchRooms();
            await sendFirebaseMessage({
              sender,
              content: 'Welcome to room',
              createdAt: new Date(),
              updatedAt: new Date(),
              groupId: result.id,
            });
            await createFirebaseMember(host);

            this.loading = false;
            this.modalCreateRoom = false;
          })
          .catch((e) => {
            this.message.error(this.t('error.create_room'), {
              closable: true,
              duration: 5000,
            });
            console.log('show error :', e);
            this.loading = false;
            this.modalCreateRoom = false;
          });
      },

      countMember(data: any) {
        return Object.entries(data).length;
      },

      navigateChat(id?: string) {
        this.$router.push({
          name: PagesKey.CHAT_PAGE,
          params: {
            id,
          },
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
    <n-scrollbar style="max-height: 700px">
      <n-list bordered>
        <n-list-item v-for="room in rooms" :key="room.id">
          <div class="w-full flex flex-row items-center justify-between">
            <div class="text-left flex flex-col items-start">
              <span class="text-base font-medium truncate w-36">
                Room: {{ room.name }}
              </span>
              <span class="text-base font-medium truncate w-36">
                Host: {{ room.host?.name || room.host?.email }}
              </span>
            </div>
            <!-- <span>{{ countMember(room.members) }} members</span> -->
            <span class="truncate w-28">{{ room.lastMessage }}</span>
          </div>
          <template #suffix>
            <n-button round @click="navigateChat(room.id)"> Chat now </n-button>
          </template>
        </n-list-item>
      </n-list>
    </n-scrollbar>

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
