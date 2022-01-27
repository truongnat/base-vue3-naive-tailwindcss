<template>
  <div>LandingPage</div>
</template>
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
<style lang="css"></style>
