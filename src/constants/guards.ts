export enum ROLE_USER {
  ADMIN = 'admin',
  GUEST = 'guest',
  MEMBER = 'member',
  SUB_ADMIN = 'subAdmin',
}

export const ROLE_OPTIONS: Record<ROLE_USER, string> = {
  [ROLE_USER.ADMIN]: 'ADMIN',
  [ROLE_USER.GUEST]: 'GUEST',
  [ROLE_USER.MEMBER]: 'MEMBER',
  [ROLE_USER.SUB_ADMIN]: 'SUB_ADMIN',
};

export const ROLE_LIST = [
  ROLE_OPTIONS.admin,
  ROLE_OPTIONS.subAdmin,
  ROLE_OPTIONS.member,
  ROLE_OPTIONS.guest,
];
