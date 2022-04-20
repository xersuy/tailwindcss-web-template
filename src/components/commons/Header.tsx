import React, { FC, useCallback, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { MENU_ITEM_LIST, geSubKeyToUrl } from '~/utils/navMapper';

import classNames from 'classnames';

type Props = {};

const Header: FC = (props: Props) => {
  const navigate = useNavigate();

  const [hoverMenu, setHoverMenu] = useState({
    show: false,
    root: '',
    subMenu: '',
  });

  return (
    <nav
      className="relative px-16 left-0 top-0 w-full bg-white border-solid border-b z-[9999]"
      onMouseLeave={() => setHoverMenu({ show: false, root: '', subMenu: '' })}
    >
      <div className="flex items-center justify-center m-auto max-w-7xl drop-shadow-xl">
        <div className="flex items-center justify-start w-full h-[5rem]">
          <div className="flex items-center flex-shrink-0 ">
            <Link to="/">
              <img
                className={'lg:block w-[200px]  sm:block cursor-pointer'}
                loading="lazy"
                src={require('~/assets/img/logo/logo_bk.png')}
                alt="logo_color"
              />
            </Link>
          </div>
          <ul className="flex flex-row ml-[9rem] w-full max-w-[32rem]">
            {(MENU_ITEM_LIST ?? []).map((menu) => {
              return (
                <li
                  key={`header_${menu.root}`}
                  className={'relative left-0 font-bold cursor-pointer w-full'}
                  onMouseOver={() =>
                    setHoverMenu({
                      show: true,
                      root: menu.root,
                      subMenu: menu.subMenu,
                    })
                  }
                >
                  {menu.name}
                  {hoverMenu.show && menu.root === hoverMenu.root ? (
                    <div className="absolute left-0 top-[3.5rem] flex w-full z-[99999]">
                      <nav>
                        <ul className="flex flex-col justify-center">
                          {(geSubKeyToUrl(hoverMenu.subMenu) ?? []).map(
                            (submenu, idx) => {
                              return (
                                <NavLink
                                  key={idx}
                                  className="font-normal"
                                  to={`/${menu.root}/${submenu.path}/`}
                                >
                                  <li className={'mt-[0.8rem] cursor-pointer'}>
                                    {submenu.name}
                                  </li>
                                </NavLink>
                              );
                            },
                          )}
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
        <div className="absolute top-[5rem] left-0 w-full bg-white border-solid h-[8.5rem] z-[-1] border border-b" />
      ) : null}
    </nav>
  );
};

export default Header;
