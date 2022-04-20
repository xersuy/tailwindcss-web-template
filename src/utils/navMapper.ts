export type SubPathType =
  | 'COMPANY_SUBS'
  | 'SERVICE_SUBS'
  | 'CUSTOMER_SUBS'
  | 'USER_SUBS'
  | 'NONE';

export type MenuItemList = {
  show: boolean;
  root: string;
  subMenu: SubPathType;
};

export const MENU_ITEM_LIST = [
  {
    name: '회사소개',
    root: 'company',
    subMenu: 'COMPANY_SUBS',
  },
  {
    name: '서비스소개',
    root: 'service',
    subMenu: 'SERVICE_SUBS',
  },
  {
    name: '고객센터',
    root: 'customer',
    subMenu: 'CUSTOMER_SUBS',
  },
  {
    name: '회원공간',
    root: 'user',
    subMenu: 'USER_SUBS',
  },
];

const SUB_MENU_ITEMS: Record<string, { name: string; path: string }[]> = {
  NONE: [],
  COMPANY_SUBS: [
    { name: '인사말씀', path: 'introduce' },
    {
      name: '회사소개',
      path: 'company_introduce',
    },
    {
      name: '찾아오시는길',
      path: 'contact',
    },
  ],
  SERVICE_SUBS: [{ name: 'D.A', path: 'direct' }],
  CUSTOMER_SUBS: [
    { name: 'Ipsub 01', path: '/' },
    {
      name: 'Ipsub 02',
      path: '/',
    },
    {
      name: 'Ipsub 03',
      path: '/',
    },
  ],
  USER_SUBS: [],
};

export const geSubKeyToUrl = (key: string) => {
  return SUB_MENU_ITEMS[key];
};
