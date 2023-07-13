import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.TiendaSlice} TiendaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TiendaSlice>} TiendaProps
 * @param {TiendaProps}
 */
const Tienda = ({ slice }) => {
  return (
    <section className="text-[#3E5E75] bg-[#F0F0F0]">
      <div className="container mx-auto py-16 lg:py-28">
        <h2 className="text-center lg:text-6xl text-4xl font-semibold">
          <PrismicRichText field={slice.primary.titulo} />
        </h2>
        <p className="text-center w-3/5 mx-auto mt-8">
          <PrismicRichText field={slice.primary.descripcion} />
        </p>
        <div className="my-16 justify-center items-center flex">
          <PrismicNextLink field={slice.primary.imagen_link} >
            <PrismicNextImage field={slice.primary.imagen} />
          </PrismicNextLink>
        </div>
      </div>
    </section >
  );
};

export default Tienda;
