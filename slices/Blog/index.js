import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.BlogSlice} BlogSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogSlice>} BlogProps
 * @param {BlogProps}
 */
const Blog = ({ slice }) => {
  return (
    <section className="bg-[#3E5E75] text-[#F0F0F0]">
      <div className="container mx-auto px-6 py-16 lg:py-28">
        <h2 className="text-center lg:text-6xl text-4xl font-semibold">
          <PrismicRichText field={slice.primary.titulo} />
        </h2>
        <div className="text-center lg:w-3/5 mx-auto mt-8 text-sm lg:text-base">
          <PrismicRichText field={slice.primary.descripcion} />
        </div>
        <div className="grid lg:grid-cols-3 gap-16 mt-16 place-items-center">
          {slice.items.map((tarjeta, index) =>
            <div key={index} className="lg:w-[410px] lg:h-[375px] w-full overflow-hidden rounded-lg hover:drop-shadow-lg transform transition duration-500 hover:scale-105">
              <PrismicNextImage field={tarjeta.tarjeta_imagen} />
              <div className="bg-[#F0F0F0] text-black p-6">
                <h3 className="font-semibold mt-0"><PrismicRichText field={tarjeta.tarjeta_titulo} /></h3>
                <PrismicRichText field={tarjeta.tarjeta_texto} className="mt-2" />
              </div>
            </div>
          )}
        </div>
        <div className="text-center mt-16 lg:mt-32">
          <a href="blog.html">
            <button className="bg-[#F68B1F] text-[#F0F0F0] px-6 py-4 rounded-full font-semibold hover:opacity-90 ">
              Ver más
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
