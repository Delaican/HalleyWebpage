import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

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
        <div className="flex justify-around items-center mt-8">
          <div className="hidden lg:block w-[540px] overflow-hidden rounded-lg hover:drop-shadow-2xl transform transition duration-500 hover:scale-105">
            <div className="h-72 object-cover rounded-t-lg w-full" >
              <PrismicNextImage field={slice.primary.tarjeta_imagen} />
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
            <div className="grid grid-cols-2 gap-8 mt-4 ">
              {slice.items.map((imagen, index) =>
                <PrismicNextLink key={index} field={imagen.imagen_link} className="transform transition duration-500 hover:scale-105" >
                    <div className="p-4">
                      <PrismicNextImage field={imagen.imagenes_actividades} className="h-48 w-48 object-cover rounded-lg hover:drop-shadow-lg" />
                    </div>
                  <div>
                    <h3 className="ml-4 text-2xl"><PrismicRichText field={imagen.imagen_titulo} /></h3>
                  </div>
                </PrismicNextLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Divulgacion;
