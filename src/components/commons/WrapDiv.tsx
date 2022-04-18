import React, { ReactNode, FC, useMemo } from 'react';
import classNames from 'classnames';
type WrapDivProps = {
  children: ReactNode;
  className?: string;
};

const WrapDiv: FC<WrapDivProps> = ({ children, className = '' }) => {
  const classNameProps = useMemo(() => {
    return className ?? '';
  }, [className]);
  return (
    <div
      className={classNames(
        'flex flex-col w-full m-auto max-w-9xl align-center',
        classNameProps,
      )}
    >
      {children}
    </div>
  );
};

export default WrapDiv;
