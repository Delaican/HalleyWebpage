import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
const Hero = ({ slice }) => {
  

  return (
    <div className="bg-hero-pattern object-cover h-[642px] z-0 brightness-75">
      <div className="flex">
        {slice.items.map((imagen, index) => <div key={index} className="w-12 h-12">
          <PrismicNextImage field={imagen.heroimage} />
        </div>
        )}
      </div>

      {/* <!-- botones --> */}
      <section className="container flex justify-between items-center mx-auto h-full p-4">
        <button
          type="button"
          className="text-[#3E5E75] bg-white hover:opacity-80 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
        >
          <svg
            className="w-4 h-4 m-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
        </button>
        <button
          type="button"
          className="text-[#3E5E75] bg-white hover:opacity-80 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
        >
          <svg
            className="w-4 h-4 m-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </section>
    </div>
  );
};

export default Hero;
