import React, { FC } from 'react';

interface WrapContainerProps extends React.HTMLAttributes<Element> {
  children: React.ReactNode;
}

const WrapContainer: FC<WrapContainerProps> = ({ children, ...props }) => {
  return <div className="w-full border-2 ">{children}</div>;
};

export default WrapContainer;
