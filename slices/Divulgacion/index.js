import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.DivulgacionSlice} DivulgacionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DivulgacionSlice>} DivulgacionProps
 * @param {DivulgacionProps}
 */
const Divulgacion = ({ slice }) => {
  return (
    <section className="bg-[#3E5E75] text-[#F0F0F0]">
      <div className="container mx-auto px-6 py-16 lg:py-28">
        <h2 className="text-center lg:text-6xl text-4xl font-semibold">
          <PrismicRichText field={slice.primary.titulo} />
        </h2>
        <p className="text-center lg:w-3/5 mx-auto mt-8 text-sm lg:text-base">
          <PrismicRichText field={slice.primary.descripcion} />
        </p>
        <div className="flex justify-around items-center mt-16">
          <div className="hidden lg:block w-[540px] overflow-hidden rounded-lg hover:drop-shadow-2xl transform transition duration-500 hover:scale-105">
            <div>
              <PrismicNextImage field={slice.primary.tarjeta_imagen} className="h-72 object-cover rounded-t-lg w-full" />
            </div>
            <div className="bg-[#F0F0F0] text-black p-6">
              <h3 className="text-2xl font-semibold mt-4">Eclipse Lunar</h3>
              <p className="my-4">
                <PrismicRichText field={slice.primary.tarjeta_texto} />
              </p>
            </div>
          </div>
          <div className="lg:mr-16">
            <h4 className="text-center text-3xl mb-8"><PrismicRichText field={slice.primary.titulo_actividades} /></h4>
            <div className="grid grid-cols-2 gap-8 mt-4 transform transition duration-500 hover:scale-105">
              {slice.items.map((imagen, index) => <PrismicNextImage key={index} field={imagen.imagenes_actividades} className="h-48 w-48 object-cover rounded-lg hover:drop-shadow-lg" />)}
            </div>
          </div>
        </div>
        <div className="text-center mt-16 lg:mt-32">
          <a href="divulgacion.html">
            <button className="bg-[#F68B1F] px-6 py-4 rounded-full font-semibold hover:opacity-90 ">
              Ver más
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Divulgacion;
