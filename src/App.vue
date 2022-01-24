<script lang="ts">
  import { CashOutline as CashIcon } from '@vicons/ionicons5';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {},
  });
</script>

<template>
  <n-space>
    <n-button strong secondary>Default</n-button>
    <n-button strong secondary type="tertiary">Tertiary</n-button>
    <n-button strong secondary type="primary">Primary</n-button>
    <n-button strong secondary type="info">Info</n-button>
    <n-button strong secondary type="success">Success</n-button>
    <n-button strong secondary type="warning">Warning</n-button>
    <n-button strong secondary type="error">Error</n-button>
    <n-button strong secondary round>Default</n-button>
    <n-button strong secondary round type="primary">Primary</n-button>
    <n-button strong secondary round type="info">Info</n-button>
    <n-button strong secondary round type="success">Success</n-button>
    <n-button strong secondary round type="warning">Warning</n-button>
    <n-button strong secondary round type="error">Error</n-button>
  </n-space>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
