import React, { FC } from 'react';
import classNames from 'classnames';
type SectionTitleProps = {
  text?: string;
  className?: string;
};

const SectionTitle: FC<SectionTitleProps> = ({
  text = '',
  className = 'justify-center',
}) => {
  return (
    <div
      className={classNames('flex text-2xl font-bold', {
        className,
      })}
    >
      {text}
    </div>
  );
};

export default SectionTitle;
