import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import WrapDiv from '../commons/WrapDiv';

type Props = {};

const AdviceOrthobit = (props: Props) => {
  return (
    <WrapDiv className="p-8 px-16 bg-sky-200 ">
      <div className="flex flex-row items-center w-full">
        <FontAwesomeIcon
          className="flex mr-20"
          size={'2x'}
          color="#000"
          icon={['fas', 'phone']}
        />
        <div className="mr-8 text-2xl font-bold ">REQUEST</div>
        <div className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <button className="flex ml-auto border-2 w-full max-w-[200px] justify-center items-center h-10 border-white">
          REQUEST
        </button>
      </div>
    </WrapDiv>
  );
};

export default AdviceOrthobit;
// px-16 pt-16 pb-[7.5rem]
