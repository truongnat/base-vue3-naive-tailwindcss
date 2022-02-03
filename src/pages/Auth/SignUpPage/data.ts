export interface IModelSignUp {
  email: string | null;
  password: string | null;
  reenteredPassword: string | null;
  roleType: string | null;
}

export function _render_rules_validation(
  validatePasswordStartWith: Function,
  validatePasswordSame: Function,
  validateEmail: Function
) {
  return {
    email: [
      {
        required: true,
        trigger: ['blur', 'input'],
        message: 'Please input email',
      },
      {
        validator: validateEmail,
        message: 'Email incorrect!',
        trigger: 'input',
      },
    ],

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

export const init_form: IModelSignUp = {
  email: null,
  password: null,
  reenteredPassword: null,
  roleType: null,
};

export const CODE_ERROR = {
  EMAIL_ALREADY: 'auth/email-already-in-use',
};
