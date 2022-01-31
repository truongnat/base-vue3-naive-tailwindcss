<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'LandingPage',
    computed: {
      test() {
        return import.meta.env.VITE_BASE_URL;
      },
    },
  });
</script>

<template>
  <div>LandingPage</div>
</template>
<style lang="css"></style>
