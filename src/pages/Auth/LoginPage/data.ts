export interface IFormLogin {
  email: string | null;
  password: string | null;
  roleType: string | null;
  saveLogin?: boolean;
}

export function _render_rules_validation(validateEmail: Function) {
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
  };
}

export const init_form: IFormLogin = {
  email: null,
  password: null,
  roleType: null,
  saveLogin: false,
};
