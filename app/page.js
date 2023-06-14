import Image from "next/image";


export default function HomePage() {
  return (
    <>
      <main>
        <div className="bg-hero-pattern object-cover h-[642px] z-0 brightness-75">
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
        <section className="bg-[#3E5E75] text-[#F0F0F0]">
          <div className="container mx-auto px-6 py-16 lg:py-28">
            <h2 className="text-center lg:text-6xl text-4xl font-semibold">
              Divulgación
            </h2>
            <p className="text-center lg:w-3/5 mx-auto mt-8 text-sm lg:text-base">
              El Grupo Halley UIS, comprometido con la comunidad, dedica este
              espacio a la divulgación de las ciencias astronómicas a través de
              actividades informativas plasmadas en: conferencias, videos,
              infografías, fanzine, retos, entre otros.
            </p>
            <div className="flex justify-around items-center mt-16">
              <div className="hidden lg:block w-[540px] overflow-hidden rounded-lg hover:drop-shadow-2xl transform transition duration-500 hover:scale-105">
                <div>
                  <Image
                    src="/images/post1.jpg"
                    alt="post1"
                    height={200}
                    width={200}
                    className="h-72 object-cover rounded-t-lg w-full"
                  />
                </div>
                <div className="bg-[#F0F0F0] text-black p-6">
                  <h3 className="text-2xl font-semibold mt-4">Eclipse Lunar</h3>
                  <p className="my-4">
                    Un eclipse lunar es un evento astronómico que sucede cuando
                    la Tierra se interpone entre el Sol y la Luna, generando un
                    cono de sombra que oscurece a la Luna.
                  </p>
                </div>
              </div>
              <div className="lg:mr-16">
                <h4 className="text-center text-3xl mb-8">Actividades</h4>
                <div className="grid grid-cols-2 gap-8 mt-4 transform transition duration-500 hover:scale-105">
                  <Image
                    src="/images/vecinos_amigos.jpg"
                    alt="vecinos_amigos"
                    height={200}
                    width={200}
                    className="h-48 w-48 object-cover rounded-lg hover:drop-shadow-lg"
                  />
                  <Image
                    src="/images/noches_astro.png"
                    alt="noches_astro"
                    height={200}
                    width={200}
                    className="h-48 w-48 object-cover rounded-lg hover:drop-shadow-lg"
                  />
                  <Image
                    src="/images/observatorio.PNG"
                    alt="observatorio"
                    height={200}
                    width={200}
                    className="h-48 w-48 object-cover rounded-lg hover:drop-shadow-lg"
                  />
                  <Image
                    src="/images/curso_astro.jpg"
                    alt="curso_astro"
                    height={200}
                    width={200}
                    className="h-48 w-48 object-cover rounded-lg hover:drop-shadow-lg"
                  />
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
        <section className="text-[#3E5E75] bg-[#F0F0F0]">
          <div className="container mx-auto px-6 py-16 lg:py-28">
            <h2 className="text-center lg:text-6xl text-4xl font-semibold">
              Investigación
            </h2>
            <p className="text-center lg:w-3/5 mx-auto mt-8 text-sm lg:text-base">
              Proyectos de investigación activos del grupo Halley UIS.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-4 mt-16 place-items-center">
              <div className="h-[284px] w-[232px] mb-8 rounded-lg hover:drop-shadow-lg bg-white transform transition duration-500 hover:scale-105">
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
              </div>
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
        <section className="bg-[#3E5E75] text-[#F0F0F0]">
          <div className="container mx-auto px-6 py-16 lg:py-28">
            <h2 className="text-center lg:text-6xl text-4xl font-semibold">
              Blog
            </h2>
            <p className="text-center lg:w-3/5 mx-auto mt-8 text-sm lg:text-base">
              Columnas de opinión y noticias centíficas escritas por nuestra
              comunidad.
            </p>
            <div className="grid lg:grid-cols-3 gap-16 mt-16 place-items-center">
              <div className="lg:w-[410px] lg:h-[375px] w-full overflow-hidden rounded-lg hover:drop-shadow-lg transform transition duration-500 hover:scale-105">
                <div>
                  <Image
                    src="/images/post1.jpg"
                    alt="post1"
                    height={200}
                    width={200}
                    className="h-[220px] object-cover rounded-t-lg w-full"
                  />
                </div>
                <div className="bg-[#F0F0F0] text-black p-6">
                  <h3 className="font-semibold mt-0">Eclipse Lunar</h3>
                  <p className="mt-2">
                    Un eclipse lunar es un evento astronómico que sucede cuando
                    la Tierra se interpone entre el Sol y la Luna...
                  </p>
                </div>
              </div>
              <div className="lg:block hidden w-[410px] h-[375px] overflow-hidden rounded-lg hover:drop-shadow-lg transform transition duration-500 hover:scale-105">
                <div>
                  <Image
                    src="/images/post2.jpg"
                    alt="post2"
                    height={200}
                    width={200}
                    className="h-[220px] object-cover rounded-t-lg w-full"
                  />
                </div>
                <div className="bg-[#F0F0F0] text-black p-6">
                  <h3 className="font-semibold mt-0">
                    ¿Cómo nos dimos cuenta que no somos el centro del universo?
                  </h3>
                  <p className="mt-2">
                    Y una pregunta más importante es: ¿Por qué aún somos
                    egocéntricos?
                  </p>
                </div>
              </div>
              <div className="lg:block hidden w-[410px] h-[375px] overflow-hidden rounded-lg hover:drop-shadow-lg transform transition duration-500 hover:scale-105">
                <div>
                  <Image
                    src="/images/post3.jpg"
                    alt="post3"
                    height={200}
                    width={200}
                    className="h-[220px] object-cover rounded-t-lg w-full"
                  />
                </div>
                <div className="bg-[#F0F0F0] text-black p-6">
                  <h3 className="font-semibold mt-0">
                    Hipatia de Alejandría: la primera mujer astrónoma
                  </h3>
                  <p className="mt-2">
                    Confeccionó un planisferio celeste que permitía cartografiar
                    diversos astros y diseñó un astrolabio...
                  </p>
                </div>
              </div>
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
        <section className="text-[#3E5E75] bg-[#F0F0F0]">
          <div className="container mx-auto px-6 py-28">
            <h2 className="text-center text-6xl font-semibold">Tienda</h2>
            <p className="text-center w-3/5 mx-auto mt-8">
              Dale click a la imagen para descargar nuestro catálogo!
            </p>
            <div className="flex">
              <div className="mt-16 flex justify-center items-center w-screen">
                <Image
                  src="/images/store.jpg"
                  alt="tienda"
                  height={200}
                  width={200}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
