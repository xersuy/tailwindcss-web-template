import React from 'react';
import WrapDiv from '../commons/WrapDiv';

type Props = {};
// overflow-hidden bg-white rounded-lg ring-1 ring-gray-900 ring-opacity-5
const AboutUs = (props: Props) => {
  return (
    <WrapDiv className="py-16 bg-gray-100">
      <div className="flex justify-center text-2xl font-bold ">AboutUs</div>

      <div className="flex flex-row justify-center px-10">
        <div className="flex flex-col justify-center w-full text-4xl font-bold">
          Lorem Ipsum is simply dummy text of the printing and typesetting.
          industry.
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <img
            className={'hidden w-500 h-auto sm:block rounded-xl'}
            loading="lazy"
            src={require('~/assets/img/dental_sm.png')}
            alt="about_us_image"
            width="500px"
            // height=""
          />
        </div>
      </div>

      <div>ddd</div>
    </WrapDiv>
  );
};

export default AboutUs;
