import React, { useRef } from 'react';
import WrapDiv from '~/components/commons/WrapDiv';
import Slider, { Settings } from 'react-slick';
import SectionTitle from '~/components/SectionTitle';
type Props = {};

const VendorsContainer = (props: Props) => {
  const slider = useRef<Slider | null>(null);

  var settings: Settings = {
    dots: false,
    lazyLoad: 'ondemand',
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,

    responsive: [],
    arrows: false,
  };

  return (
    <WrapDiv className="px-16 py-16 bg-gray-300 vendor_class">
      <SectionTitle text={'Vendor Hospitals'} className={'justify-start'} />
      <ul className="mt-16">
        <Slider
          {...settings}
          ref={slider}
          // beforeChange={handleBeforeChange}
        >
          {([...Array(20)] ?? []).map((v, i) => {
            const random = Math.floor(Math.random() * 3);
            const item = `00${random}`;

            return (
              <li key={i} className="mr-[20px] p-[20px]">
                <img
                  className={'w-[200px] h-auto sm:block'}
                  loading="lazy"
                  src={require(`~/assets/img/vendors/vendor_logo${item}.png`)}
                  alt="about_us_image"
                />
              </li>
            );
          })}
        </Slider>
      </ul>
    </WrapDiv>
  );
};

export default VendorsContainer;
