import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useMemo } from 'react';
import { IconName } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
type LineIconRowProps = {
  title: string; // 타이틀
  subTitle: string; // 서브 타이틀
  iconName: IconName; // 아이콘 이름
  className?: string; // 추가적인 클래스
};

const LineIconRow: FC<LineIconRowProps> = ({
  title = '',
  subTitle = '',
  iconName,
  className = '',
}) => {
  const divClassOption = useMemo(() => {
    return 'flex flex-row items-center ' + className ?? '';
  }, [className]);

  return (
    <div className={classNames(divClassOption)}>
      <div className="flex items-center justify-center w-[84px]">
        {iconName && (
          <FontAwesomeIcon size={'4x'} color="#000" icon={['fas', iconName]} />
        )}
      </div>
      <div className="flex flex-col ml-5">
        <div className="text-2xl text-bold">{title ?? ''}</div>
        <div>{subTitle ?? ''}</div>
      </div>
    </div>
  );
};

export default LineIconRow;
