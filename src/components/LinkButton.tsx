import React, { FC, useCallback } from 'react';
import { NavLink as BaseNavLink } from 'react-router-dom';
type LinkButtonProps = {
  text: string;
  linkPath: string;
};

const LinkButton: FC<LinkButtonProps> = ({ text = '', linkPath = '' }) => {
  return (
    <BaseNavLink
      className="inline-block px-8 py-3 font-medium text-center text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
      to={linkPath}
    >
      {text}
    </BaseNavLink>
  );
};

export default LinkButton;
