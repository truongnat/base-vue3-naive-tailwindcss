<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'LandingPage',
    setup() {
      return {
        input: '',
      };
    },
    computed: {
      test() {
        return import.meta.env.VITE_BASE_URL;
      },
    },
    methods: {
      testStore() {
        this.$socket.send(this.input);
      },
      onChange(val: string) {
        this.input = val;
      },
    },
  });
</script>

<template>
  <div>LandingPage</div>
  <n-input
    v-model="input"
    type="text"
    placeholder="Medium Input"
    @change="onChange"
  />
  <n-button @click="testStore">{{ $t('common.save') }}</n-button>
</template>
<style lang="css"></style>
