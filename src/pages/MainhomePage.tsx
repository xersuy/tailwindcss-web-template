import React from 'react';
import WrapContainer from '~/components/commons/WrapContainer';
import AboutUs from '~/components/contents/AboutUs';
import AdvantageContents from '~/components/contents/AdvantageContents';
import AdviceOrthobit from '~/components/contents/AdviceOrthobit';
import MainCarousel from '~/containers/MainCarousel';
import VendorsContainer from '~/containers/VendorsContainer';

type Props = {};

export interface MainSectionType {
  name: string;
  sectionId: string;
}

const MainhomePage = (props: Props) => {
  return (
    <WrapContainer>
      <MainCarousel />
      <AboutUs />
      <AdvantageContents />
      <VendorsContainer />
      {/* <AdviceOrthobit /> */}
    </WrapContainer>
  );
};

export default MainhomePage;
