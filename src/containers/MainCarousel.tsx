import React, { FC, useCallback, useMemo, useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import MainContent from '~/components/contents/MainContent';
type MainCarouselProps = {};

// 메인페이지에서 캐러셀 섹션
const MainCarousel: FC<MainCarouselProps> = ({}) => {
  const slider = useRef<Slider | null>(null);

  var settings: Settings = {
    dots: true,
    lazyLoad: 'ondemand',
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,

    responsive: [],
    arrows: false,
  };

  // 캐러셀 이미지 prev 동작 함수
  const handlePrevClick = useCallback(() => {
    if (slider.current) {
      slider.current.slickPrev();
    }
  }, [slider]);

  // 캐러셀 이미지 next 동작 함수
  const handleNextClick = useCallback(() => {
    if (slider.current) {
      slider?.current?.slickNext();
    }
  }, [slider]);

  // const handleBeforeChange = useCallback((v: any) => {}, []);

  return (
    <main className="main_content">
      <Slider
        {...settings}
        ref={slider}
        // beforeChange={handleBeforeChange}
      >
        <MainContent
          key={'main-content-1'}
          title={'Lorem Ipsum is simply dummy text'}
          content={
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
          }
          moveText={'내용 보기'}
          movePath={'/'}
        />

        <MainContent
          key={'main-content-2'}
          title={'Contrary to popular belief'}
          content={
            'piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.'
          }
          moveText={'Show More'}
          movePath={'/'}
        />

        <MainContent
          key={'main-content-3'}
          title={'non-characteristic words etc'}
          content={
            'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
          }
          moveText={'Move Page'}
          movePath={'/'}
        />
      </Slider>
    </main>
  );
};

export default MainCarousel;
