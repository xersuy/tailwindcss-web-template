import React from 'react';
import BrTagger from '~/components/BrTagger';
import WrapDiv from '~/components/commons/WrapDiv';
import CompanyActivitySection from '~/components/CompanyActivitySection';
import AboutUs from '~/components/contents/AboutUs';

type Props = {};

const CompanyIntroducePage = (props: Props) => {
  return (
    <div className="w-full ">
      <div className="w-full">
        <video
          className="object-cover object-center w-screen h-[30rem]"
          loop={true}
          playsInline={true}
          autoPlay
          muted={true}
        >
          <source
            type="video/mp4"
            src={require('~/assets/img/videos/dental_video.mp4')}
          ></source>
        </video>
      </div>

      <WrapDiv className="bg-white">
        <div className="px-16 pt-16 pb-[5rem]">
          <div className="font-normal text-md">회사소개</div>
          <BrTagger count={1} />
          <div className="flex w-full felx-col">
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </div>
        </div>

        <AboutUs />
        <CompanyActivitySection />
      </WrapDiv>
    </div>
  );
};

export default CompanyIntroducePage;
