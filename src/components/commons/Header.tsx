import React, { useCallback, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

type Props = {};

type SubPathType = 'COMPANY_SUBS' | 'SERVICE_SUBS' | 'CUSTOMER_SUBS' | 'NONE';

type MenuItemList = {
  show: boolean;
  root: string;
  subMenu: SubPathType;
};

const MENU_ITEM_LIST = [
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
  SERVICE_SUBS: [
    { name: 'Lorem 01', path: 'lorem_01' },
    {
      name: 'Lorem 02',
      path: 'lorem_02',
    },
    {
      name: 'Lorem 03',
      path: 'lorem_03',
    },
  ],
  CUSTOMER_SUBS: [
    { name: 'Ipsub 01', path: 'ipsub_01' },
    {
      name: 'Ipsub 02',
      path: 'ipsub_02',
    },
    {
      name: 'Ipsub 03',
      path: 'ipsub_03',
    },
  ],
};

export const geSubKeyToUrl = (key: string) => {
  return SUB_MENU_ITEMS[key];
};

const Header = (props: Props) => {
  const [hoverMenu, setHoverMenu] = useState({
    show: false,
    root: '',
    subMenu: 'NONE',
  });

  const [hoverSubMenu, setHoverSubMenu] = useState('');

  return (
    <nav
      className="relative left-0 top-0 w-full bg-white border-solid border-b z-[9999]"
      onMouseLeave={() => setHoverMenu({ show: false, root: '', subMenu: '' })}
    >
      <div className="flex items-center justify-center m-auto max-w-7xl drop-shadow-xl">
        <div className="flex items-center justify-start w-full h-[5rem]">
          <div className="flex items-center flex-shrink-0 ">
            <img
              className={'lg:block w-[200px]  sm:block '}
              loading="lazy"
              src={require('~/assets/img/logo/logo_bk.png')}
              alt="logo_color"
            />
          </div>
          <ul className="flex flex-row ml-[9rem] w-full max-w-[32rem]">
            {(MENU_ITEM_LIST ?? []).map((v) => {
              return (
                <li
                  key={`header_${v.root}`}
                  className={'relative left-0 font-bold cursor-pointer w-full'}
                  onMouseOver={() =>
                    setHoverMenu({
                      show: true,
                      root: v.root,
                      subMenu: v.subMenu,
                    })
                  }
                >
                  {v.name}
                  {hoverMenu.show && v.root === hoverMenu.root ? (
                    <div className="absolute left-0 top-[3.5rem] flex w-full z-[99999]">
                      <nav>
                        <ul className="flex flex-col justify-center">
                          {(geSubKeyToUrl(hoverMenu.subMenu) ?? []).map((v) => {
                            return (
                              <li
                                key={v.path}
                                className={'mt-[0.8rem] cursor-pointer'}
                              >
                                <NavLink className="font-normal" to="/">
                                  {v.name}
                                </NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </nav>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {hoverMenu.show ? (
        <div className="fixed top-[5rem] left-0 w-full bg-red-100 border-solid h-[8.5rem] z-[-1]" />
      ) : null}
    </nav>
  );
};

export default Header;
