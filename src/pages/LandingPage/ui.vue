<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'LandingPage',

    setup() {
      return {};
    },
    data: () => ({}),
  });
</script>

<template>
  <div class="w-1/3 mx-auto text-center">
    <n-gradient-text
      gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
      class="text-2xl py-10"
    >
      Landing Page
    </n-gradient-text>
  </div>
</template>
