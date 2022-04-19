import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-white">
      <div className="flex flex-col w-full px-16 m-auto max-w-9xl">
        <div className="flex flex-row justify-between pt-8 pb-4">
          <h1>
            <img
              className={'lg:block w-[200px] sm:block rounded-t-xl'}
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
        <div className="flex flex-row justify-between py-8">
          <div className="flex flex-col">
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
          <div className="flex flex-col">
            <h3 className="font-bold">Lorem Ipsum</h3>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold">Lorem Ipsum</h3>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold">Lorem Ipsum</h3>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold">Lorem Ipsum</h3>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold">Lorem Ipsum</h3>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
        </div>
        <hr className="f-hr" />
        <div className="flex flex-col justify-center h-16">
          <div className="text-sm"> ⓒ 2021 MGATE. All rights reserved.</div>
        </div>
      </div>
      {/* <div className="inner">
 
        <hr className="f-hr" />
        <div className="footer-middle">
          <div className="f-info">
            <h3>회사 정보</h3>
            <ul>
              <li>이메일 : mail@ipsventures.com</li>
              <li>팩스 : 02-6434-8036</li>
              <li>상호 : 지문</li>
              <li>대표 : 한치원</li>
              <li>사업자등록번호 : 201-86-01760</li>
              <li>
                주소 : 서울 서초구 반포대로 23길 14, 5층(서초동, 매강빌딩)
              </li>
            </ul>
          </div>
          <div className="f-info">
            <h3>비용안내</h3>
            <ul>
              <li>
                <a href="#none">서비스 비용</a>
              </li>
              <li>
                <a href="#none">상표 비용</a>
              </li>
              <li>
                <a href="#none">옵션 비용</a>
              </li>
            </ul>
          </div>
          <div className="f-info">
            <h3>상표 진행 절차</h3>
            <ul>
              <li>
                <a href="#none">상표 진행 절차</a>
              </li>
            </ul>
          </div>
          <div className="f-info">
            <h3>서비스 소개</h3>
            <ul>
              <li>
                <a href="#none">M GATE</a>
              </li>
              <li>
                <a href="#none">비전과 핵심기술</a>
              </li>
              <li>
                <a href="#none">서비스 안내</a>
              </li>
              <li>
                <a href="#none">기사/블로그</a>
              </li>
            </ul>
          </div>
          <div className="f-info">
            <h3>고객센터</h3>
            <ul>
              <li>
                <a href="#none">자주 묻는 질문</a>
              </li>
              <li>
                <a href="#none">이벤트</a>
              </li>
              <li>
                <a href="#none">1:1 문의하기</a>
              </li>
              <li>
                <a href="#none">이용약관</a>
              </li>
              <li>
                <a href="#none">개인정보 취급방침</a>
              </li>
            </ul>
          </div>
          <div className="f-info">
            <h3>은행정보</h3>
            <ul>
              <li>국민은행 827901-04-078362</li>
              <li>하나은행 630-005597-521</li>
              <li>예금주 지문(주)</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="f-hr2" />
      <div className="footer-bottom">
        <div className="inner">
          <p>ⓒ 2021 MGATE. All rights reserved.</p>
          <ul>
            <li>
              <a href="#none">
                <img src="img/common/ico_blog.png" />
              </a>
            </li>
            <li>
              <a href="#none">
                <img src="img/common/ico_insta.png" />
              </a>
            </li>
            <li>
              <a href="#none">
                <img src="img/common/ico_naver.png" />
              </a>
            </li>
            <li>
              <a href="#none">
                <img src="img/common/ico_youtube.png" />
              </a>
            </li>
            <li>
              <a href="#none">
                <img src="img/common/ico_facebook.png" />
              </a>
            </li>
            <li>
              <a href="#none">
                <img src="img/common/ico_kakaoch.png" />
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
