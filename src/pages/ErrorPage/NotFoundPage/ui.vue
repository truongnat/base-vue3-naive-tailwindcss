<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <n-result
      status="404"
      title="404 Not Found"
      description="You know life is always ridiculous."
    >
      <template #footer>
        <n-button @click="$router.push('/')">Back to Home</n-button>
      </template>
    </n-result>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'NotFoundPage',
    computed: {},
  });
</script>
