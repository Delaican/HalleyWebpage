import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.ContenidoTextoSlice} ContenidoTextoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContenidoTextoSlice>} ContenidoTextoProps
 * @param {ContenidoTextoProps}
 */
const ContenidoTexto = ({ slice }) => {
  return (
    <section className="bg-[#F0F0F0] text-[#000000]">
      <div className="container mx-auto px-6 py-16 lg:py-28">
        <h2 className="text-center lg:text-6xl text-4xl font-semibold">
          <PrismicRichText field={slice.primary.titulo} />
        </h2>
      </div>
      {/* <div> */}
      {slice.items.map((item, index) =>
        <div key={index} className="container mx-auto">
          <h3 className="lg:text-4xl text-2xl font-medium mb-8">
            <PrismicRichText field={item.subtitulo} />
          </h3>
          <div className="flex-overflow">
            <PrismicNextImage field={item.imagen} className=" "/>
            <p className="mx-auto mt-8 text-sm lg:text-base">
              <PrismicRichText field={item.texto} />
            </p>
          </div>
        </div>
      )}
      {/* </div> */}

    </section>
  );
};

export default ContenidoTexto;
