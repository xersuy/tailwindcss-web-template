import React from 'react';
import AnchorLinker from '~/components/AnchorLinker';
import WrapContainer from '~/components/commons/WrapContainer';
import AboutUs from '~/components/contents/AboutUs';
import AdvantageContents from '~/components/contents/AdvantageContents';
import MainCarousel from '~/containers/MainCarousel';

type Props = {};

const MainhomePage = (props: Props) => {
  return (
    <WrapContainer>
      <MainCarousel />
      <AboutUs />
      <AdvantageContents />

      <AnchorLinker />
    </WrapContainer>
  );
};

export default MainhomePage;
