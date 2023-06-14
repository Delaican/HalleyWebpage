import Head from "next/head";
import Image from "next/image";

export default function VecinosYAmigos() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <section className="bg-[#3E5E75] text-[#F0F0F0]">
                    <div className="container mx-auto px-6 py-16">
                        <h2 className="text-center lg:text-6xl text-4xl font-semibold">
                            Vecinos y amigos
                        </h2>
                        <p className="text-center lg:w-3/5 mx-auto mt-8 text-sm lg:text-base">
                            Prográmate para las actividades de Vecinos y amigos!
                        </p>
                        <p className="text-center lg:w-3/5 mx-auto text-sm lg:text-base">
                            Todos los domingos de 10-12 m.
                        </p>
                    </div>
                </section>
                <section className="text-[#3E5E75] bg-[#F0F0F0] lg:pb-24">
                    <div className="container mx-auto px-6 py-6">
                        <h4 className="text-center lg:text-5xl text-3xl my-16 font-light">
                            Programación
                        </h4>
                        <div className="grid lg:grid-cols-3 gap-8 place-items-center text-black">
                            <div>
                                <div className="h-[344px] w-[232px] rounded-lg drop-shadow-lg bg-white transform transition duration-500 hover:drop-shadow-2xl">
                                    <div>
                                        <div className="p-4">
                                            <Image
                                                src="/images/obs_solar.JPG"
                                                alt="obs_solar"
                                                width={200}
                                                height={200}
                                                className="h-[216px] w-[205px] object-cover rounded-lg"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="mx-4 text-lg font-semibold">
                                            Observación solar
                                        </h2>
                                        <p className="ml-4 mt-2">21 Oct. Plazoleta entrada Cra 27</p>
                                    </div>
                                </div>
                                <p className="mt-8 text-lg text-center text-[#69CEDF]">
                                    Próxima semana...
                                </p>
                            </div>
                            <div>
                                <div className="h-[344px] w-[232px] rounded-lg drop-shadow-lg bg-white transform transition duration-500 hover:drop-shadow-2xl">
                                    <div>
                                        <div className="p-4">
                                            <Image
                                                src="/images/vecinos_amigos.jpg"
                                                alt="vecinos_amigos"
                                                width={200}
                                                height={200}
                                                className="h-[216px] w-[205px] object-cover rounded-lg"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="mx-4 text-lg font-semibold">Astrobiología</h2>
                                        <p className="ml-4 mt-2">16 Oct. Plazoleta entrada Cra 27</p>
                                    </div>
                                </div>
                                <p className="mt-8 text-lg text-center text-[#F68B1F]">
                                    Actividad de la semana!
                                </p>
                            </div>
                            <div>
                                <div className="h-[344px] w-[232px] rounded-lg drop-shadow-lg bg-white transform transition duration-500 hover:drop-shadow-2xl">
                                    <div>
                                        <div className="p-4">
                                            <Image
                                                src="/images/obs_solar.JPG"
                                                alt="obs_solar"
                                                width={200}
                                                height={200}
                                                className="h-[216px] w-[205px] object-cover rounded-lg"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="mx-4 text-lg font-semibold">
                                            Taller infantil astrofísica
                                        </h2>
                                        <p className="ml-4 mt-2">9 Oct. Plazoleta entrada Cra 27</p>
                                    </div>
                                </div>
                                <p className="mt-8 text-lg text-center text-[#69CEDF]">
                                    Semana pasada...
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
