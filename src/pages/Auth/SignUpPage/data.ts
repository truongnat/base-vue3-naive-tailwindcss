export interface IModelSignUp {
  username: string | null;
  password: string | null;
  reenteredPassword: string | null;
  roleType: string | null;
}

export function _render_rules_validation(
  validatePasswordStartWith: Function,
  validatePasswordSame: Function
) {
  return {
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
        message: 'Password incorrect!',
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
  };
}

export const init_form = {
  username: null,
  password: null,
  reenteredPassword: null,
  roleType: null,
};
