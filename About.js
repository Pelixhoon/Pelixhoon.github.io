import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container font-Gm1 mx-auto flex px-4 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="font-gm2 sm:text-5xl text-4xl mb-4 font-medium text-white">
            안녕하세요
          </p>
          <p className="font-gm1 sm:text-5xl text-4xl mb-4 font-medium text-white">
            프론트엔드 개발자 송명훈입니다
          </p>
          <p className="mb-8 text-xl leading-relaxed font-gm1">
            고려대학교에서 컴퓨터와 법, 경제 융합 전공을 공부하고 있습니다.
            <br />
            시각적인 이미지와 인터랙티브 디자인에 관심이 많아 프론트엔드에
            관심을 갖게 되었고,
            <br />
            고려대 소프트웨어 벤처 학회 'NEXTx멋쟁이사자처럼'에서 10기
            학회원으로서 함께 성장하고 있습니다.
          </p>
          <div className="flex justify-center">
            <a
              href="https://github.com/Pelixhoon"
              className="inline-flex font-pp1 text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-2xl"
            >
              Github
            </a>
            <a
              href="https://www.instagram.com/pelixhoon/"
              className="ml-4 inline-flex font-pp1 text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-2xl"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-60% w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="myunghoon"
            src="./IMG_2002 2.JPG"
          />
        </div>
      </div>
    </section>
  );
}
