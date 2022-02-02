<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {},
  });
</script>

<template>
  <n-notification-provider>
    <n-message-provider>
      <router-view></router-view>
    </n-message-provider>
  </n-notification-provider>
</template>
