import React from 'react';
import IconCircle from './IconCircle';
import WrapDiv from '~/components/commons/WrapDiv';
type Props = {};

const CompanyActivitySection = (props: Props) => {
  return (
    <WrapDiv className="flex flex-col w-full px-16 pt-16 pb-[5rem] ">
      <div className="flex flex-col items-center justify-center ">
        <div className="text-xl font-bold">What is Lorem Ipsum</div>
        <div className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <div className="mt-4 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.
        </div>
      </div>

      <div className="mt-8">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col items-center justify-center">
            <IconCircle iconName={'gear'} />
            <div className="w-[10rem] text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>

          <hr className="w-[5rem] mt-[3.5rem]" />
          <div className="flex flex-col items-center justify-center">
            <IconCircle iconName={'tooth'} />
            <div className="w-[10rem] text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>

          <hr className="w-[5rem] mt-[3.5rem]" />
          <div className="flex flex-col items-center justify-center">
            <IconCircle iconName={'truck-moving'} />
            <div className="w-[10rem] text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>

          <hr className="w-[5rem] mt-[3.5rem]" />
          <div className="flex flex-col items-center justify-center">
            <IconCircle iconName={'handshake-angle'} />
            <div className="w-[10rem] text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
        </div>
      </div>
    </WrapDiv>
  );
};

export default CompanyActivitySection;
