import React, { FC } from 'react';

type SectionTitleProps = {
  text?: string;
};

const SectionTitle: FC<SectionTitleProps> = ({ text = '' }) => {
  return <div className="flex justify-center text-2xl font-bold">{text}</div>;
};

export default SectionTitle;
