<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <n-result
      status="500"
      title="500 Server Error"
      description="Server error may prove that you need hiring more developers."
    >
      <template #footer>
        <n-button>Speard Money Out</n-button>
      </template>
    </n-result>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ServerErrorPage',
  });
</script>
