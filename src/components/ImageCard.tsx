import React, { FC } from 'react';

type ImageCardProps = {
  title?: string; //타이틀
  contents?: string;
  imagePath?: any;
};

const ImageCard: FC<ImageCardProps> = ({
  title = '',
  contents = '',
  imagePath = '',
}) => {
  return (
    <div className="flex flex-col w-full max-w-[330px] shadow-xl rounded-xl">
      {imagePath && (
        <div>
          <img
            className={'hidden w-500 h-auto sm:block rounded-t-xl'}
            loading="lazy"
            src={imagePath}
            alt="about_us_image"
            width="100%"
            // height=""
          />
        </div>
      )}

      <div className="p-5  h-[180px]  ">
        <div className="text-2xl font-bold">{title ?? ''}</div>
        <div className="flex text-md h-[110px]">{contents ?? ''}</div>
      </div>
    </div>
  );
};
export default ImageCard;
