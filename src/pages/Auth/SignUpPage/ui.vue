<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { FormRules, useMessage } from 'naive-ui';

  import { ROLE_LIST } from '../../../constants';

  export default defineComponent({
    name: 'SignUpPage',
    setup() {
      const formRefSignUp = ref(null);
      const rPasswordFormItemRef = ref(null);
      const message = useMessage();
      const modelRef = ref({
        username: null,
        password: null,
        reenteredPassword: null,
        roleType: null,
      });
      function validatePasswordStartWith(rule: FormRules, value: string) {
        return (
          modelRef.value.password &&
          modelRef.value.password.startsWith(value) &&
          modelRef.value.password.length >= value.length
        );
      }
      function validatePasswordSame(rule: FormRules, value: string) {
        return value === modelRef.value.password;
      }
      return {
        formRefSignUp,
        rPasswordFormItemRef,
        size: ref('medium'),
        model: modelRef,
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

          password: [
            {
              required: true,
              message: 'Password is required',
            },
          ],
          reenteredPassword: [
            {
              required: true,
              message: 'Re-entered password is required',
              trigger: ['input', 'blur'],
            },
            {
              validator: validatePasswordStartWith,
              message: 'Password is not same as re-entered password!',
              trigger: 'input',
            },
            {
              validator: validatePasswordSame,
              message: 'Password is not same as re-entered password!',
              trigger: ['blur', 'password-input'],
            },
          ],
          roleType: {
            required: true,
            trigger: ['blur', 'change'],
            message: 'Please select roleType',
          },
        },
        handlePasswordInput() {
          if (modelRef.value.reenteredPassword) {
            rPasswordFormItemRef.value.validate({ trigger: 'password-input' });
          }
        },
        handleValidateButtonClick(e: Event) {
          e.preventDefault();
          formRefSignUp.value.validate((errors: any) => {
            if (!errors) {
              message.success('Valid');
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
      ref="formRefSignUp"
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
        SignUp Page
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
      <n-form-item
        ref="rPasswordFormItemRef"
        path="reenteredPassword"
        label="Re-enter Password"
      >
        <n-input
          v-model:value="model.reenteredPassword"
          type="password"
          placeholder="re-password"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item label="Select role" path="roleType">
        <n-select
          v-model:value="model.roleType"
          placeholder="Select role"
          :options="generalOptions"
        />
      </n-form-item>

      <div class="flex justify-end">
        <n-button round type="primary" @click="handleValidateButtonClick">
          Submit
        </n-button>
      </div>
    </n-form>
  </div>
</template>
