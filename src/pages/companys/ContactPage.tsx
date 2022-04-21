import React from 'react';
import BrTagger from '~/components/BrTagger';
import WrapDiv from '~/components/commons/WrapDiv';
import KakaoMapLocation from '~/components/KakaoMapLocation';

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <WrapDiv className="bg-white">
      <div className="px-16 pt-16 pb-[5rem]">
        <KakaoMapLocation />
      </div>
    </WrapDiv>
  );
};

export default ContactPage;
