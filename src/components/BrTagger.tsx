import React, { FC } from 'react';

type BrTagerProps = {
  count?: number;
};

/*
  <r /> count를 받아서 태그를 반복해주는 컴포넌트
*/
const BrTagger: FC<BrTagerProps> = ({ count = 1 }) => {
  return (
    <>
      {([...Array(count ?? 1)] ?? []).map((v, idx) => (
        <br key={`br_${idx}`} />
      ))}
    </>
  );
};

export default BrTagger;
