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
        <h2 className="text-center mb-16 lg:text-6xl text-4xl font-semibold">
          <PrismicRichText field={slice.primary.titulo} />
        </h2>
        {slice.items.map((item, index) =>
          <div key={index}>
            <h3 className="lg:text-4xl text-2xl font-semibold"><PrismicRichText field={item.subtitulo} /></h3>
            <figure className="my-8">
              <PrismicNextImage field={item.imagen} className="object-contain h-72 mx-auto" />
              <figcaption className="text-center"><PrismicRichText field={item.imagen_caption} /></figcaption>
            </figure>
            <div>
            <PrismicRichText field={item.texto} />
            </div>
          </div>
        )}
      </div>

    </section >
  );
};

export default ContenidoTexto;
