import React from 'react';
import BrTagger from '~/components/BrTagger';
import WrapDiv from '~/components/commons/WrapDiv';

type Props = {};
/*
  인사말씀 페이지
*/
const IntroducePage = (props: Props) => {
  return (
    <WrapDiv className="px-16 bg-white py-9 vendor_class">
      <div className="font-normal text-md">인사말씀</div>
      <BrTagger count={1} />
      <div className="flex justify-between w-full felx-row ">
        <div className="flex flex-col w-1/2 mr-[5rem]">
          <div className="text-2xl font-bold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="mt-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            <BrTagger count={2} />
            <b>Where does it come from?</b>
            <BrTagger count={2} />
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </div>
        </div>
        <div className="flex items-start w-1/2">
          <img
            className={'w-full h-auto max-h-[500px] sm:block rounded-xl'}
            loading="lazy"
            src={require('~/assets/img/ceo_img.jpg')}
            alt="about_us_image"
          />
        </div>
      </div>
    </WrapDiv>
  );
};

export default IntroducePage;
