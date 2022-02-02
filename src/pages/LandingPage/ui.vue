<script lang="ts">
  import { ROOT_STORE, SUPPORT_LANG } from '@/constants';
  import { _changeLang } from '@/lang';
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
        _changeLang(SUPPORT_LANG.VI);
      },
    },
  });
</script>

<template>
  <div>LandingPage</div>
  <n-button @click="testStore">{{ $t('common.save') }}</n-button>
</template>
<style lang="css"></style>
