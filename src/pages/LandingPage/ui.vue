<script lang="ts">
  import { ROOT_STORE } from '@/constants';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'LandingPage',
    computed: {
      test() {
        return import.meta.env.VITE_BASE_URL;
      },
    },
    methods: {
      testStore() {
        this.$store.dispatch(ROOT_STORE.ACTIONS.LOADING, {
          loading: true,
        });
      },
    },
  });
</script>

<template>
  <div>LandingPage</div>
  <n-button @click="testStore">click me</n-button>
</template>
<style lang="css"></style>
