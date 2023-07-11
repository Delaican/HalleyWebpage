import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.VecinosyAmigosSlice} VecinosyAmigosSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VecinosyAmigosSlice>} VecinosyAmigosProps
 * @param {VecinosyAmigosProps}
 */
const VecinosyAmigos = ({ slice }) => {
  return (
    <section className="bg-[#F0F0F0] text-[#3E5E75]">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-center lg:text-6xl text-4xl font-semibold">
          <PrismicRichText field={slice.primary.titulo} />
        </h2>
        <p className="text-center lg:w-3/5 mx-auto mt-8 text-sm lg:text-base">
          <PrismicRichText field={slice.primary.descripcion} />
        </p>
      </div>
      <div className="container mx-auto px-6 py-6">
        <div className="grid lg:grid-cols-3 gap-8 place-items-center text-black">

          {slice.items.map((tarjeta, index) =>
            <div key={index}>
              <PrismicNextLink field={tarjeta.tarjeta_link}>
                <div className="h-[344px] w-[232px] rounded-lg drop-shadow-lg bg-white transform transition duration-500 hover:drop-shadow-2xl">
                  <div className="p-4">
                    <PrismicNextImage field={tarjeta.tarjeta_imagen} className="h-[216px] w-[205px] object-cover rounded-lg" />
                  </div>
                  <div>
                    <h2 className="mx-4 text-lg font-semibold">
                      <PrismicRichText field={tarjeta.tarjeta_titulo} />
                    </h2>
                    <p className="ml-4 mt-2"><PrismicRichText field={tarjeta.tarjeta_texto} /></p>
                  </div>
                </div>
              </PrismicNextLink>
              <p className="mt-8 text-lg text-center text-[#F68B1F]">
                <PrismicRichText field={tarjeta.tarjeta_subtexto} />
              </p>
            </div>
          )}


        </div>
      </div>
    </section>
  );
};

export default VecinosyAmigos;
