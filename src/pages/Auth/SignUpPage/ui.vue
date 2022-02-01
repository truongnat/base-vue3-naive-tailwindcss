<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { FormRules, FormValidationError, useMessage } from 'naive-ui';

  import { ROLE_LIST } from '@constants';
  import { IModelSignUp, init_form, _render_rules_validation } from './data';

  export default defineComponent({
    name: 'SignUpPage',
    setup() {
      const formRefSignUp = ref<any>(null);
      const rPasswordFormItemRef = ref<any>(null);
      const message = useMessage();
      const modelRef = ref<IModelSignUp>({ ...init_form });
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
          ..._render_rules_validation(
            validatePasswordStartWith,
            validatePasswordSame
          ),
        },
        handlePasswordInput() {
          if (modelRef.value.reenteredPassword) {
            rPasswordFormItemRef.value.validate({ trigger: 'password-input' });
          }
        },
        handleValidateButtonClick(e: Event) {
          e.preventDefault();
          formRefSignUp.value.validate((errors: FormValidationError) => {
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
