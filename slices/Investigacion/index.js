import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.InvestigacionSlice} InvestigacionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<InvestigacionSlice>} InvestigacionProps
 * @param {InvestigacionProps}
 */
const Investigacion = ({ slice }) => {
  return (
    <section className="text-[#3E5E75] bg-[#F0F0F0]">
      <div className="container mx-auto px-6 py-16 lg:py-28">
        <h2 className="text-center lg:text-6xl text-4xl font-semibold">
          <PrismicRichText field={slice.primary.titulo} />
        </h2>
        <div className="text-center lg:w-3/5 mx-auto mt-8 text-sm lg:text-base">
          <PrismicRichText field={slice.primary.descripcion} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 mt-16 place-items-center">
          {slice.items.map((tarjeta, index) =>
            <div key={index} className="h-[284px] w-[232px] mb-8 rounded-lg hover:drop-shadow-lg bg-white transform transition duration-500 hover:scale-105">
              <PrismicNextLink field={tarjeta.tarjeta_link}>
              <div>
                  <div className="p-4">
                    <PrismicNextImage field={tarjeta.tarjeta_imagen} className="h-[216px] w-[205px] object-contain" />
                  </div>
                </div>
                <div>
                  <h3 className="ml-4 text-2xl font-semibold"><PrismicRichText field={tarjeta.tarjeta_titulo} /></h3>
                </div>
              </PrismicNextLink>
            </div>
          )}
          {/* <div className="h-[284px] w-[232px] mb-8 rounded-lg hover:drop-shadow-lg bg-white transform transition duration-500 hover:scale-105">
            <a
              href="https://halley.uis.edu.co/fuego/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <div className="p-4">
                  <Image
                    src="/images/mute.jpg"
                    alt="mute"
                    height={200}
                    width={200}
                    className="h-[216px] w-[205px] object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="ml-4 text-2xl font-semibold">MuTe</h3>
              </div>
            </a>
          </div>
          <div className="h-[284px] w-[232px] mb-8 rounded-lg hover:drop-shadow-lg bg-white transform transition duration-500 hover:scale-105">
            <a
              href="https://lagoproject.net/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <div className="p-4">
                  <Image
                    src="/images/lago-logo.png"
                    alt="lago"
                    height={200}
                    width={200}
                    className="h-[216px] w-[205px] object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="ml-4 text-2xl font-semibold">Lago-UIS</h3>
              </div>
            </a>
          </div>
          <div className="h-[284px] w-[232px] mb-8 rounded-lg hover:drop-shadow-lg bg-white transform transition duration-500 hover:scale-105">
            <a
              href="http://auger.uis.edu.co/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <div className="p-4">
                  <Image
                    src="/images/auger_logo.jpg"
                    alt="auger"
                    height={200}
                    width={200}
                    className="h-[216px] w-[205px] object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="ml-4 text-2xl font-semibold">Auger-UIS</h3>
              </div>
            </a>
          </div>
          <div className="h-[284px] w-[232px] mb-8 rounded-lg hover:drop-shadow-lg bg-white transform transition duration-500 hover:scale-105">
            <a
              href="https://halley.uis.edu.co/astroparamo/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <div className="p-4">
                  <Image
                    src="/images/astroparamo.png"
                    alt="astroparamo"
                    height={200}
                    width={200}
                    className="h-[216px] w-[205px] object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="ml-4 text-2xl font-semibold">Astropáramo</h3>
              </div>
            </a>
          </div>*/}
        </div>
          <div className="text-center mt-16 lg:mt-32">
            <a href="investigacion.html">
              <button className="bg-[#F68B1F] text-[#F0F0F0] px-6 py-4 rounded-full font-semibold hover:opacity-90 ">
                Ver más
              </button>
            </a>
          </div>
        </div>
    </section>
  );
};

export default Investigacion;
