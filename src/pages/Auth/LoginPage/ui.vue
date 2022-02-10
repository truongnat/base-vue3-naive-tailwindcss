<script lang="ts">
  import { useMessage, FormValidationError, FormRules } from 'naive-ui';
  import { defineComponent, ref } from 'vue';

  import { AUTH_STORE, ROLE_LIST } from '@constants';
  import {
    CODE_ERROR,
    IFormLogin,
    init_form,
    _render_rules_validation,
  } from './data';
  import { PagesKey } from '@constants';
  import { StorageUtils, _isValidEmail } from '@/utils';
  import { api } from '@/config';
  import { useI18n } from 'vue-i18n';
  import { useStore } from '@/store';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'LoginPage',
    setup() {
      const formRefLogin = ref<any>(null);
      const message = useMessage();
      const store = useStore();
      const router = useRouter();
      const loading = ref(false);
      const modelRef = ref<IFormLogin>({ ...init_form });
      const i18n = useI18n();

      function validateEmail(rule: FormRules, value: string) {
        return _isValidEmail(value);
      }

      return {
        formRefLogin,
        size: ref('medium'),
        model: modelRef,
        generalOptions: ROLE_LIST.map((v) => ({
          label: v,
          value: v,
        })),
        PagesKey,
        rules: { ..._render_rules_validation(validateEmail) },
        handleValidateButtonClick(e: Event) {
          e.preventDefault();
          formRefLogin.value.validate((errors: FormValidationError) => {
            if (!errors) {
              loading.value = true;

              api.auth
                ._firebaseLogin(
                  modelRef.value.email as string,
                  modelRef.value.password as string
                )
                .then(async (result) => {
                  if (result.code === CODE_ERROR.USER_NOT_FOUND) {
                    return message.error(i18n.t('error.user_login_not_found'), {
                      closable: true,
                      duration: 5000,
                    });
                  }
                  message.success(i18n.t('success.user_login'), {
                    closable: true,
                    duration: 5000,
                  });
                  const saveToken = [
                    {
                      accessToken: result?.user?.accessToken,
                    },
                    {
                      refreshToken: result?.user?.refreshToken,
                    },
                  ];
                  StorageUtils.sessionStorage.setMul(saveToken);

                  store.dispatch(AUTH_STORE.ACTIONS.IS_LOGIN, {
                    isLogin: true,
                  });
                  store.dispatch(AUTH_STORE.ACTIONS.USER_INFO, {
                    userInfo: result?.user,
                  });
                  return await router.push({ name: PagesKey.CHAT_PAGE });
                });
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

      <n-form-item label="email" path="email">
        <n-input v-model:value="model.email" placeholder="email" />
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

      <div class="flex justify-between">
        <n-button @click="$router.push({ name: PagesKey.SIGN_UP_PAGE })">
          Register
        </n-button>
        <n-button round type="primary" @click="handleValidateButtonClick">
          Submit
        </n-button>
      </div>
    </n-form>
  </div>
</template>
