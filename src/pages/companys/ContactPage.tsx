import React from 'react';
import BrTagger from '~/components/BrTagger';
import WrapDiv from '~/components/commons/WrapDiv';
import KakaoMapLocation from '~/components/KakaoMapLocation';

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <WrapDiv className="bg-white">
      <div className="px-16 pt-16 pb-[5rem]">
        <div className="font-normal text-md"> 찾아오시는 길</div>
        <div className="flex justify-between w-full felx-row ">
          <div className="flex flex-col w-1/2 mr-[5rem]">
            <div className="text-2xl font-bold">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="mt-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
              <BrTagger count={2} />
            </div>
          </div>
        </div>
        <KakaoMapLocation />
      </div>
    </WrapDiv>
  );
};

export default ContactPage;
