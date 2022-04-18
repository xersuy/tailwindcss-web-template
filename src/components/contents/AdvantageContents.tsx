import React from 'react';
import WrapDiv from '~/components/commons/WrapDiv';
import ImageCard from '~/components/ImageCard';
import SectionTitle from '~/components/SectionTitle';

type Props = {};

const AdvantageContents = (props: Props) => {
  return (
    <WrapDiv className="px-8 pt-16 pb-[7.5rem] bg-white ">
      <SectionTitle text={'Start ORTHOBIT'} />

      <div className="flex flex-row justify-between mt-8">
        <ImageCard
          key={'image_card_1'}
          title={'Lorem Ipsum is simply'}
          contents={`It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently`}
          imagePath={require('~/assets/img/advantage_img01.jpg')}
        />

        <ImageCard
          key={'image_card_2'}
          title={'Lorem Ipsum is simply'}
          contents={`It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently`}
          imagePath={require('~/assets/img/advantage_img02.jpg')}
        />

        <ImageCard
          key={'image_card_3'}
          title={'Lorem Ipsum is simply'}
          contents={
            'It was popularised in the 1960s with the releas It was popularised in'
          }
          imagePath={require('~/assets/img/advantage_img03.jpg')}
        />

        <ImageCard
          key={'image_card_4'}
          title={'Lorem Ipsum is simply'}
          contents={`It was popularised in the 1960s with the release of Letraset sheets`}
          imagePath={require('~/assets/img/advantage_img04.jpg')}
        />
      </div>
    </WrapDiv>
  );
};

export default AdvantageContents;
