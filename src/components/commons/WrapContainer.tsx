import React, { FC } from "react";

interface WrapContainerProps extends React.HTMLAttributes<Element> {
  children: React.ReactNode;
}

const WrapContainer: FC<WrapContainerProps> = ({ children, ...props }) => {
  return <div className="border-2">{children}</div>;
};

export default WrapContainer;
