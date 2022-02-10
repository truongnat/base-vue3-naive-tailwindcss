<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import hljs from 'highlight.js/lib/core';

  hljs.registerLanguage('naive-log', () => ({
    contains: [
      {
        className: 'number',
        begin: /\d+/,
      },
    ],
  }));

  export default defineComponent({
    setup() {
      return {
        hljs,
      };
    },
  });
</script>

<template>
  <n-config-provider :hljs="hljs">
    <n-loading-bar-provider>
      <n-notification-provider>
        <n-message-provider>
          <router-view></router-view>
        </n-message-provider>
      </n-notification-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
