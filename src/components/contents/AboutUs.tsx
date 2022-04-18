import React, { FC } from 'react';
import WrapDiv from '~/components/commons/WrapDiv';
import LineIconRow from '~/components/LineIconRow';
import SectionTitle from '~/components/SectionTitle';

type AboutUsProps = {};
// overflow-hidden bg-white rounded-lg ring-1 ring-gray-900 ring-opacity-5
const AboutUs: FC<AboutUsProps> = () => {
  return (
    <WrapDiv className="px-16 pt-16 pb-[7.5rem] bg-gray-100">
      <SectionTitle text={'AboutUs'} />
      <div className="flex flex-row justify-center mt-8">
        <div className="flex flex-col justify-center w-full text-4xl font-bold">
          Lorem Ipsum is simply dummy text of the printing and typesetting.
          industry.
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <img
            className={'w-500 h-auto sm:block rounded-xl'}
            loading="lazy"
            src={require('~/assets/img/dental_sm.png')}
            alt="about_us_image"
            width="500px"
            // height=""
          />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <LineIconRow
          key={'line_icon_row_1'}
          title="Lorem Ipsum is simply"
          subTitle={`Lorem Ipsum has been the industry's`}
          iconName="coins"
        />

        <LineIconRow
          key={'line_icon_row_2'}
          title="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          subTitle={`Lorem Ipsum has been the industry's`}
          iconName="certificate"
          className={'mt-6'}
        />

        <LineIconRow
          key={'line_icon_row_3'}
          title="Lorem Ipsum is simply dummy text of the printin"
          subTitle={`Lorem Ipsum has been the industry's`}
          iconName="robot"
          className={'mt-6'}
        />

        <LineIconRow
          key={'line_icon_row_4'}
          title="g and typesetting industry"
          subTitle={`Lorem Ipsum has been the industry's`}
          iconName="hospital-user"
          className={'mt-6'}
        />
      </div>
    </WrapDiv>
  );
};

export default AboutUs;
