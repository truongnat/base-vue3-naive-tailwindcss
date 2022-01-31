<script lang="ts">
  import { useMessage } from 'naive-ui';
  import { defineComponent, ref } from 'vue';

  import { ROLE_LIST } from '@constants';

  export default defineComponent({
    name: 'LoginPage',
    setup() {
      const formRefLogin = ref<any>({});
      const message = useMessage();
      return {
        formRefLogin,
        size: ref('medium'),
        model: ref({
          username: null,
          password: null,
          roleType: null,
          saveLogin: false,
        }),
        generalOptions: ROLE_LIST.map((v) => ({
          label: v,
          value: v,
        })),
        rules: {
          username: {
            required: true,
            trigger: ['blur', 'input'],
            message: 'Please input username',
          },
          password: {
            required: true,
            trigger: ['blur', 'input'],
            message: 'Please input password',
          },
          roleType: {
            required: true,
            trigger: ['blur', 'change'],
            message: 'Please select roleType',
          },
        },
        handleValidateButtonClick(e: Event) {
          e.preventDefault();
          formRefLogin.value.validate((errors: any) => {
            if (!errors) {
              message.success('Valid');
              console.log('form ref : ', formRefLogin.value.model);
            } else {
              console.log(errors);
              message.error('Invalid');
            }
          });
        },
      };
    },
  });
</script>
<template>
  <div class="w-96 mx-auto mt-20">
    <n-form
      ref="formRefLogin"
      :model="model"
      :rules="rules"
      label-placement="top"
      require-mark-placement="right-hanging"
      :size="size"
      label-width="auto"
      :style="{
        maxWidth: '640px',
      }"
    >
      <n-gradient-text
        :size="32"
        type="success"
        class="py-5 w-full text-center"
      >
        Login Page
      </n-gradient-text>

      <n-form-item label="username" path="username">
        <n-input v-model:value="model.username" placeholder="username" />
      </n-form-item>
      <n-form-item label="password" path="password">
        <n-input
          id="current-password"
          v-model:value="model.password"
          autocomplete="current-password"
          placeholder="password"
          type="password"
        />
      </n-form-item>
      <n-form-item label="Select role" path="roleType">
        <n-select
          v-model:value="model.roleType"
          placeholder="Select role"
          :options="generalOptions"
        />
      </n-form-item>

      <n-form-item label="Save login" path="saveLogin">
        <n-switch v-model:value="model.saveLogin" />
      </n-form-item>

      <div class="flex justify-end">
        <n-button round type="primary" @click="handleValidateButtonClick">
          Submit
        </n-button>
      </div>
    </n-form>
  </div>
</template>
