import React, { FC, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

type IconCircleProps = {
  iconName: IconName;
};

const IconCircle: FC<IconCircleProps> = ({ iconName }) => {
  const iconCircleName = useMemo(() => {
    return iconName ?? '';
  }, [iconName]);

  return (
    <div
      className="flex flex-col justify-center items-center 
          w-[7rem] h-[7rem] rounded-[50%] border 
          border-solid bg-slate-400"
    >
      <FontAwesomeIcon
        icon={['fas', iconCircleName]}
        size={'2x'}
        color={'#fff'}
      />
    </div>
  );
};

export default IconCircle;
