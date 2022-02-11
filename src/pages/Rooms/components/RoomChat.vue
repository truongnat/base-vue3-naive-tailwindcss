<script lang="ts">
  import { ChatMessage, RoomChat } from '@/@types';
  import {
    getCurrentRoom,
    getMessagesByRoomKey,
    sendFirebaseMessage,
  } from '@/services';
  import { defineComponent } from 'vue';
  import MessageChat from './MessageChat.vue';
  import { Send } from '@vicons/ionicons5';
  import { useLoadingBar, useMessage } from 'naive-ui';
  import { mapGetters } from 'vuex';
  import { AUTH_STORE, PagesKey } from '@/constants';

  export default defineComponent({
    name: 'RoomChat',
    components: { MessageChat, Send },
    setup() {
      const loadingBar = useLoadingBar();
      const message = useMessage();

      return {
        input: '',
        loadingBar,
        message,
      };
    },
    data: () => ({
      room: {} as RoomChat,
      messages: [] as ChatMessage[],
      loading: false,
    }),
    computed: {
      ...mapGetters([AUTH_STORE.GETTERS.USER_INFO]),
      roomKey() {
        return this.$route.params.id as string;
      },
    },
    mounted() {
      this.loadingBar.start();
      getCurrentRoom(this.roomKey)
        .then((result) => {
          if (result) {
            this.room = result;
            this.fetchMessages();
          } else {
            this.message.error('Room not found!', {
              closable: true,
              duration: 5000,
            });
            this.$router.push({ name: PagesKey.ROOMS_PAGE });
          }
          this.loadingBar.finish();
        })
        .catch(() => {
          this.loadingBar.error();
        });
    },
    methods: {
      handleBack() {
        this.$router.go(-1);
      },

      fetchMessages() {
        getMessagesByRoomKey(this.roomKey).then((messages) => {
          this.messages = messages;
        });
      },

      onChange(val: string) {
        this.input = val;
      },
      sendMessage() {
        //
        if (this.input.length === 0) {
          return;
        }
        this.loading = true;
        sendFirebaseMessage({
          content: this.input,
          createdAt: new Date(),
          groupId: this.roomKey,
          updatedAt: new Date(),
          sender: {
            avatar: '',
            email: this.USER_INFO?.email,
            name: this.USER_INFO?.name || this.USER_INFO?.email,
            uid: this.USER_INFO.uid,
          },
        })
          .then(() => {
            this.loading = false;
            this.input = '';
            this.fetchMessages();
          })
          .catch((e) => {
            this.loading = false;
          });
      },
    },
  });
</script>
<template>
  <div class="box-chat-container">
    <n-page-header class="py-10" @back="handleBack">
      <template #title>
        <n-gradient-text
          gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
          class="text-2xl text-center"
        >
          Chat - {{ room.name }}
        </n-gradient-text>
      </template>
    </n-page-header>

    <n-scrollbar class="box-chat relative">
      <div class="box-chat-show">
        <div v-for="message in messages" :key="message.id">
          <message-chat :message="message" />
        </div>
        <div class="box-chat-form">
          <n-input
            v-model="input"
            type="text"
            round
            placeholder="send message"
            @change="onChange"
          />
          <n-button
            type="info"
            :loading="loading"
            :disabled="loading"
            round
            @click="sendMessage"
          >
            <template #icon>
              <n-icon><send /></n-icon>
            </template>
            Send
          </n-button>
        </div>
      </div>
    </n-scrollbar>
  </div>
</template>
<style lang="less">
  .box-chat-container {
    @apply w-1/3 mx-auto text-center;
  }
  .box-chat {
    @apply bg-slate-100;
    height: 700px;
  }
  .box-chat-show {
    @apply rounded-lg  border-2 w-full py-4 flex flex-col justify-between;
  }
  .box-chat-form {
    @apply flex flex-row space-x-3 px-5 py-5 absolute left-0 right-0 bottom-0 bg-slate-300 rounded-lg;
  }
</style>
