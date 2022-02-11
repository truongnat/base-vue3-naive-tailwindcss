<script lang="ts">
  import { ChatMessage } from '@/@types';
  import { AUTH_STORE } from '@/constants';
  import { convertTimeStamp } from '@/services';
  import { defineComponent, PropType } from 'vue';
  import { mapGetters } from 'vuex';

  export default defineComponent({
    name: 'MessageChat',
    props: {
      message: {
        type: Object as PropType<ChatMessage>,
        required: true,
      },
    },
    setup() {
      return {
        convertTimeStamp,
      };
    },
    computed: {
      ...mapGetters([AUTH_STORE.GETTERS.USER_INFO]),
      isHost() {
        return this.USER_INFO.uid === this.message?.sender?.uid;
      },
      createAtMessage() {
        console.log('show :', this.message);

        return this.convertTimeStamp(
          // @ts-ignore
          this.message?.createdAt?.seconds as number,
          // @ts-ignore
          this.message?.createdAt?.nanoseconds as number
        );
      },
    },
  });
</script>

<template>
  <div class="message-chat-container">
    <div v-if="!isHost" class="message-chat-wrap">
      <n-tooltip placement="left" trigger="hover">
        <template #trigger>
          <n-avatar
            round
            size="medium"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            fallback-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </template>
        {{ message?.sender.name || message?.sender.email || '--' }}
      </n-tooltip>
      <n-tooltip placement="left" trigger="hover">
        <template #trigger>
          <div class="message-chat-content">
            {{ message?.content }}
          </div>
        </template>
        {{ createAtMessage }}
      </n-tooltip>
    </div>

    <div v-else class="message-chat-wrap is-host">
      <n-tooltip placement="right" trigger="hover">
        <template #trigger>
          <div class="message-chat-content">
            {{ message?.content }}
          </div>
        </template>
        {{ createAtMessage }}
      </n-tooltip>
      <n-tooltip placement="right" trigger="hover">
        <template #trigger>
          <n-avatar
            round
            size="medium"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            fallback-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </template>
        {{ message?.sender.name || message?.sender.email || '--' }}
      </n-tooltip>
    </div>
  </div>
</template>

<style lang="less">
  .message-chat-container {
    @apply px-5 py-2;
  }

  .message-chat-wrap {
    @apply flex flex-row items-end space-x-3;
  }

  .is-host {
    @apply justify-end;
  }

  .message-chat-content {
    @apply bg-blue-200 rounded-full px-5 py-2 text-left max-w-sm;
  }
</style>
