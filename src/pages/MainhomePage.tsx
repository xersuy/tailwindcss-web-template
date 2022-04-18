import React from 'react';
import WrapContainer from '~/components/commons/WrapContainer';
import AboutUs from '~/components/contents/AboutUs';
import MainCarousel from '~/containers/MainCarousel';

type Props = {};

const MainhomePage = (props: Props) => {
  return (
    <WrapContainer>
      <MainCarousel />
      <AboutUs />
    </WrapContainer>
  );
};

export default MainhomePage;
