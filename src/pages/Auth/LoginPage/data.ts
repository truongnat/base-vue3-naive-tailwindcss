export interface IFormLogin {
  username: string | null;
  password: string | null;
  roleType: string | null;
  saveLogin?: boolean;
}

export const rules_validation = {
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
};

export const init_form: IFormLogin = {
  username: null,
  password: null,
  roleType: null,
  saveLogin: false,
};
