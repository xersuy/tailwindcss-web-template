import React from 'react';
import { Link, NavLink } from 'react-router-dom';

type Props = {};
interface MenuItemList {
  name: string;
  path: string;
}

const MENU_ITEM_LIST: MenuItemList[] = [
  {
    name: '회사소개',
    path: 'company',
  },
  {
    name: '서비스소개',
    path: 'service',
  },
  {
    name: '고객센터',
    path: 'customer',
  },
];
const Header = (props: Props) => {
  return (
    <nav className="w-full bg-white border-solid border-b  z-[9999]">
      <div className="flex items-center justify-center m-auto max-w-7xl drop-shadow-xl ">
        <div className="relative flex items-center justify-start w-full h-[5rem]">
          <div className="flex items-center flex-shrink-0 ">
            <img
              className={'lg:block w-[200px]  sm:block rounded-t-xl'}
              loading="lazy"
              src={require('~/assets/img/logo/logo_bk.png')}
              alt="logo_color"
            />
          </div>
          <div className="flex flex-row ml-[9rem]">
            {(MENU_ITEM_LIST ?? []).map((v) => {
              return (
                <NavLink
                  key={`header_${v.path}`}
                  className={'mr-20 font-bold '}
                  to={`/${v.path}/`}
                >
                  {v.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
