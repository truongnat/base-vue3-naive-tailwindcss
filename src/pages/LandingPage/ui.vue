<script lang="ts">
  import { PLATFORM_ENV, SUPPORT_LANG } from '@/constants';
  import { _changeLang } from '@/lang';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'LandingPage',
    setup() {
      return {
        PLATFORM_ENV,
      };
    },
    computed: {
      test() {
        return import.meta.env.VITE_BASE_URL;
      },
    },
    methods: {
      testStore() {
        _changeLang(SUPPORT_LANG.VI);
      },
    },
  });
</script>

<template>
  <div>LandingPage</div>
  <div>{{ test }}</div>
  <n-button @click="testStore">{{ $t('common.save') }}</n-button>
</template>
<style lang="css"></style>
