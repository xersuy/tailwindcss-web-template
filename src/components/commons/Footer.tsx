import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-white">
      <div className="flex flex-col w-full px-16 max-w-9xl">
        <div className="flex flex-row justify-between pt-8 pb-4">
          <h1>
            <img
              className={'lg:block w-[200px] sm:block'}
              loading="lazy"
              src={require('~/assets/img/logo/logo_bk.png')}
              alt="logo_color"
            />
          </h1>
          <div className="">
            <div className="text-4xl">
              <b>070-1234-5678</b>
            </div>
            <div className="text-md">
              AM 9:00 - PM 6:00 (주말 및 공휴일 휴무)
            </div>
          </div>
        </div>
        <hr className="f-hr" />

        <div className="flex flex-row justify-between w-full py-8">
          <div className="flex flex-col max-w-[500px]">
            <h3>회사 정보</h3>
            <ul>
              <li>이메일 : Lorem@email.com</li>
              <li>팩스 : 02-1234-5678</li>
              <li>상호 : Lorem</li>
              <li>대표 : Lorem Ipsum</li>
              <li>사업자등록번호 : 000-00-00000</li>
              <li>주소 : Lorem Ipsum is simply dummy</li>
            </ul>
          </div>
          <div className="flex justify-between w-full max-w-[500px]">
            <div className="flex flex-col items-center">
              <h3 className="mb-2 font-bold ">Lorem Ipsum</h3>
              <ul>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="mb-2 font-bold">Lorem Ipsum</h3>
              <ul>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="mb-2 font-bold">Lorem Ipsum</h3>
              <ul>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-2 font-bold text-right">Account</h3>
            <ul>
              <li className="text-right">Lorem Ipsum is simply dummy </li>
              <li className="text-right">Lorem Ipsum is simply</li>
              <li className="text-right">Lorem Ipsum</li>
            </ul>
          </div>
        </div>
        <hr className="f-hr" />
        <div className="flex flex-col justify-center h-16">
          <div className="text-sm"> ⓒ 2021 MGATE. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
