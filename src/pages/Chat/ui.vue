<script lang="ts">
  import { defineComponent } from 'vue';
  import { LogInOutline as LogInIcon } from '@vicons/ionicons5';

  export default defineComponent({
    name: 'ChatPage',
    components: { LogInIcon },
    setup() {
      return {};
    },
    data: () => ({
      input: '',
      loading: true,
      messages: [],
    }),
    computed: {
      chats() {
        return this.messages.join('\n') + '\n';
      },
    },
    methods: {
      onChange(val: string) {
        this.input = val;
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
      Chat Page
    </n-gradient-text>
    <n-log :loading="loading" :log="chats" />
    <div class="form-chat my-5 space-y-5">
      <n-input
        v-model="input"
        type="text"
        placeholder="message"
        round
        @change="onChange"
      />
      <div class="flex justify-end">
        <n-button icon-placement="left" type="success">
          <template #icon>
            <n-icon><log-in-icon /></n-icon>
          </template>
          Send message
        </n-button>
      </div>
    </div>
  </div>
</template>
<style lang="less"></style>
