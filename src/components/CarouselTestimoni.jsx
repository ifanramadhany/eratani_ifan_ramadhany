import React from 'react'
import {
  CCarousel,
  CCarouselItem,
  CImage,
  CCarouselCaption,
} from "@coreui/react";
import {
  Testimoni,
  Testi1,
  Testi2,
  Testi3,
  Testi4,
} from "../assets";


export default function CarouselTestimoni() {
  return (
    <CCarousel className="mb-10" controls indicators dark>
        <CCarouselItem className="testimoni">
          <CImage className="w-100" src={Testimoni} alt="" />
          <CCarouselCaption className="testimoni-caption bg-gray-200 h-60 flex justify-center items-center">
            <div className="testi mx-2 w-1/4">
              <img src={Testi1} alt="" />
            </div>
            <div className="h-full mx-2 w-3/4 flex flex-col">
              <h5 className="text-gray-700 text-left">Daruna | Petani</h5>
              <span className="text-gray-700 text-left">
                Eratani selalu memberikan dukungan untuk petani perempuan. Maju
                terus Eratani! | Eratani always gives full support to us female
                farmers. Keep moving forward, Eratani!
              </span>
              <div className="h-full flex justify-end items-center">
                <button className="button-feature mr-20 text-gray-700 bg-blue-400 h-10 w-32 flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Putar Video
                </button>
              </div>
            </div>
          </CCarouselCaption>
        </CCarouselItem>

        <CCarouselItem className="testimoni">
          <CImage className="w-100" src={Testimoni} alt="" />
          <CCarouselCaption className="testimoni-caption bg-gray-200 h-60 flex justify-center items-center">
            <div className="testi mx-2 w-1/4">
              <img src={Testi2} alt="" />
            </div>
            <div className="h-full mx-2 w-3/4 flex flex-col">
              <h5 className="text-gray-700 text-left">Tarjaya | Petani</h5>
              <span className="text-gray-700 text-left">
                Eratani itu berkah bagi saya. Banyak kekurangan petani yang
                dibantu Eratani. Saya jadi lebih semangat untuk bertani. |
                Eratani is a blessing for me. There are many farmers’
                shortcomings that are helped by Eratani. So, I am more
                enthusiastic to farm.
              </span>
              <div className="h-full flex justify-end items-center">
                <button className="button-feature mr-20 text-gray-700 bg-blue-400 h-10 w-32 flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Putar Video
                </button>
              </div>
            </div>
          </CCarouselCaption>
        </CCarouselItem>

        <CCarouselItem className="testimoni">
          <CImage className="w-100" src={Testimoni} alt="" />
          <CCarouselCaption className="testimoni-caption bg-gray-200 h-60 flex justify-center items-center">
            <div className="testi mx-2 w-1/4">
              <img src={Testi3} alt="" />
            </div>
            <div className="h-full mx-2 w-3/4 flex flex-col">
              <h5 className="text-gray-700 text-left">Danawi | Petani</h5>
              <span className="text-gray-700 text-left">
                Dengan adanya Eratani, para petani dipermudah dari permodalan
                dan pengetahuan. Eratani #SelaluAdaUntukPetani | With Eratani,
                farmers are facilitated with funding and knowledge. Eratani
                #SelaluAdaUntukPetani
              </span>
              <div className="h-full flex justify-end items-center">
                <button className="button-feature mr-20 text-gray-700 bg-blue-400 h-10 w-32 flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Putar Video
                </button>
              </div>
            </div>
          </CCarouselCaption>
        </CCarouselItem>

        <CCarouselItem className="testimoni">
          <CImage className="w-100" src={Testimoni} alt="" />
          <CCarouselCaption className="testimoni-caption bg-gray-200 h-60 flex justify-center items-center">
            <div className="testi mx-2 w-1/4">
              <img src={Testi4} alt="" />
            </div>
            <div className="h-full mx-2 w-3/4 flex flex-col">
              <h5 className="text-gray-700 text-left">Warsoni | Petani</h5>
              <span className="text-gray-700 text-left">
                Harapan saya Eratani semakin meluas karena petani sangat amat
                dibantu dengan adanya Eratani. Terimakasih Eratani! | I hope
                Eratani will get bigger because farmers are greatly helped by
                the existence of Eratani. Thank you Eratani!
              </span>
              <div className="h-full flex justify-end items-center">
                <button className="button-feature mr-20 text-gray-700 bg-blue-400 h-10 w-32 flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Putar Video
                </button>
              </div>
            </div>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
  )
}
