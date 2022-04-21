import React from 'react';
import BrTagger from '~/components/BrTagger';
import WrapDiv from '~/components/commons/WrapDiv';

type Props = {};

const CompanyIntroducePage = (props: Props) => {
  return (
    <WrapDiv className="px-16 bg-white py-9 vendor_class">
      <div className="font-normal text-md">회사소개</div>
      <BrTagger count={1} />
    </WrapDiv>
  );
};

export default CompanyIntroducePage;
