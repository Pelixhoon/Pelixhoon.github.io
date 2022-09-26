import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            className="w-10 inline-block mb-4 center"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
          <h1 className="sm:text-4xl text-3xl font-medium text-center title-font mb-4 text-white">
            Contact
          </h1>
          <p className="lg:w-2/3 mx-auto text-xl leading-relaxed text-center">
            함께 하고 싶은 프로젝트가 있다면 언제든 환영합니다
          </p>
          <div className="container px-5 py-10 mx-auto flex-col flex-wrap items-center">
            <div className="lg:w-100% md:w-100% h-96 bg-gray-900 rounded-lg overflow-hidden sm-mr-auto p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                title="map"
                className="absolute inset-0"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                style={{ filter: "opacity(0.7)" }}
                src="https://www.google.com/maps/embed/v1/place?q=Bangbae+Station,+서울특별시&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              />
              <div className="bg-black relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-12">
                  <h2 className="title-font font-semibold text-white tracking-widest text-lg">
                    Adress
                  </h2>
                  <p className="mt-1 text-lg">서울 서초구 방배로 80</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-white tracking-widest text-lg">
                    EMAIL
                  </h2>
                  <a className="text-blue-400 text-xl leading-relaxed">
                    pelixmyunghoon@gamil.com
                  </a>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-white tracking-widest text-lg mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed text-lg">010-5249-3582</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
