import React, { FC } from 'react';
import Header from './Header';

interface WrapContainerProps extends React.HTMLAttributes<Element> {
  children: React.ReactNode;
}

const WrapContainer: FC<WrapContainerProps> = ({ children, ...props }) => {
  return (
    <div className="w-full border-2 ">
      <Header />

      {children}
    </div>
  );
};

export default WrapContainer;
