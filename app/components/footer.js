import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex bg-[#3E5E75] text-[#F0F0F0]">
      <div className="container mx-auto">
        {/* <div className="lg:flex justify-center center items-center lg:w-4/5 mx-auto">
          <div className="lg:bg-[#69CEDF] px-4 lg:px-20 py-16 rounded-lg font-semibold lg:mt-28 lg:flex">
            <h3 className="text-2xl lg:text-4xl font-bold lg:w-2/5">
              Suscríbete para recibir noticias y artículos
            </h3>
            <form className="lg:w-3/5 mt-6">
              <div className="relative lg:ml-2">
                <input
                  type="email"
                  className="block placeholder-gray-500 text-black border w-full rounded-lg p-4 lg:p-6 lg:ml-4 text-sm lg:text-base"
                  placeholder="Escribe tu email aquí"
                />
                <button className="lg:bg-[#3E5E75] bg-[#69CEDF] text-[#F0F0F0] mr-1 py-2 lg:py-4 px-2 lg:px-6 rounded-lg absolute right-0 bottom-2.5 lg:bottom-2.5 font-semibold text-sm lg:text-base hover:opacity-90 ">
                  Suscríbete
                </button>
              </div>
            </form>
          </div>
        </div> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mx-auto justify-center items-center w-4/5 lg:py-8 text-sm lg:text-base">
          <div>
            <p className="font-bold">Correo</p>
            <p>halley@uis.edu.co</p>
            <p className="font-bold mt-2">Teléfono</p>
            <p> (+57)(7)6344000 Ext. 2741</p>
          </div>
          <div className="grid grid-cols-2 gap-16">
            <div>
              <Link
                href="https://www.facebook.com/HalleyUIS"
                target="_blank"
                className="flex items-center"
              >
                <svg className="w-8 h-8 fill-[#F0F0F0] mr-2" viewBox="0 0 512 512">
                  <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z" />
                </svg>

                <p>Facebook</p>
              </Link>
              <Link
                href="https://twitter.com/halleyUIS"
                target="_blank"
                className="flex mt-2 items-center"
              >
                <svg className="w-8 h-8 fill-[#F0F0F0] mr-2" viewBox="0 0 512 512">
                  <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z" />
                </svg>
                <p>Twitter</p>
              </Link>
            </div>
            <div>
              <Link
                href="https://www.instagram.com/halleyuis/"
                target="_blank"
                className="flex items-center"
              >
                <svg className="w-8 h-8 fill-[#F0F0F0] mr-2" viewBox="0 0 512 512">
                  <g>
                    <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z" />
                    <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z" />
                    <circle cx="351.5" cy="160.5" r="21.5" />
                  </g>
                </svg>
                <p>Instagram</p>
              </Link>
              <Link
                href="https://www.youtube.com/c/HalleyUIS"
                target="_blank"
                className="flex mt-2 items-center"
              >
                <svg className="w-8 h-8 fill-[#F0F0F0] mr-2" viewBox="0 0 512 512">
                  <path d="M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z" />
                </svg>
                <p>Youtube</p>
              </Link>
            </div>
          </div>
          <p className="mb-8">Política de privacidad y tratamiento de datos</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
