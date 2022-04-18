import React, { FC } from 'react';
import Footer from './Footer';
import Header from './Header';

interface WrapContainerProps extends React.HTMLAttributes<Element> {
  children: React.ReactNode;
}

const WrapContainer: FC<WrapContainerProps> = ({ children, ...props }) => {
  return (
    <div className="w-full">
      <Header />

      {children}
      <Footer />
    </div>
  );
};

export default WrapContainer;
