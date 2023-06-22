import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";

import { components } from '../slices'

export default async function Divulgacion() {
    const client = createClient();

    const page = await client.getSingle('page')
    //console.log(page)
    return (
        <>
            <main>
                <SliceZone slices={page.data.slices} components={components} />
            </main>
        </>
    );
    // return (
    //     <>
    //         <Head>
    //             <title>Create Next App</title>
    //             <meta name="description" content="Generated by create next app" />
    //             <meta name="viewport" content="width=device-width, initial-scale=1" />
    //             <link rel="icon" href="/favicon.ico" />
    //         </Head>
    //         <main>
    //             <section className="bg-[#3E5E75] text-[#F0F0F0]">
    //                 <div className="container mx-auto px-6 py-16">
    //                     <h2 className="text-center lg:text-6xl text-4xl font-semibold">
    //                         Divulgación
    //                     </h2>
    //                 </div>
    //             </section>
    //             <section className="text-[#3E5E75] bg-[#F0F0F0] pb-24">
    //                 <div className="container mx-auto px-6 py-8">
    //                     <div className="flex justify-around items-center text-[#3E5E75] bg-[#F0F0F0]">
    //                         <div className="lg:mx-16 mx-4">
    //                             <h4 className="text-center lg:text-5xl text-3xl my-16 font-light">
    //                                 Actividades
    //                             </h4>
    //                             <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-16 gap-8">
    //                                 <Link href="/vecinos-y-amigos">
    //                                     <div className="transform transition duration-500 hover:scale-105">
    //                                         <Image
    //                                             src="/images/vecinos_amigos.jpg"
    //                                             alt="vecinos_amigos"
    //                                             width={200}
    //                                             height={200}
    //                                             className="lg:h-72 lg:w-72 h-48 w-48 object-cover rounded-lg hover:drop-shadow-lg"
    //                                         />
    //                                         <p className="mt-4 lg:text-2xl font-medium">
    //                                             Vecinos y amigos
    //                                         </p>
    //                                     </div>
    //                                 </Link>
    //                                 <div className="transform transition duration-500 hover:scale-105">
    //                                     <Image
    //                                         src="/images/noches_astro.png"
    //                                         alt="noches_astro"
    //                                         width={200}
    //                                         height={200}
    //                                         className="lg:h-72 lg:w-72 h-48 w-48 object-cover rounded-lg hover:drop-shadow-lg"
    //                                     />
    //                                     <p className="mt-4 lg:text-2xl font-medium">
    //                                         Noches de astronomía
    //                                     </p>
    //                                 </div>
    //                                 <div className="transform transition duration-500 hover:scale-105">
    //                                     <Image
    //                                         src="/images/planetario.jpg"
    //                                         alt="noches_astro"
    //                                         width={200}
    //                                         height={200}
    //                                         className="lg:h-72 lg:w-72 h-48 w-48 object-cover rounded-lg hover:drop-shadow-lg"
    //                                     />
    //                                     <p className="mt-4 lg:text-2xl font-medium">Planetario</p>
    //                                 </div>
    //                                 <div className="transform transition duration-500 hover:scale-105">
    //                                     <Image
    //                                         src="/images/observatorio.PNG"
    //                                         alt="observatorio"
    //                                         width={200}
    //                                         height={200}
    //                                         className="lg:h-72 lg:w-72 h-48 w-48 object-cover rounded-lg hover:drop-shadow-lg"
    //                                     />
    //                                     <p className="mt-4 lg:text-2xl font-medium">Observatorio</p>
    //                                 </div>
    //                                 <div className="transform transition duration-500 hover:scale-105">
    //                                     <Image
    //                                         src="/images/cine_foro.jpg"
    //                                         alt="cine_foro"
    //                                         width={200}
    //                                         height={200}
    //                                         className="lg:h-72 lg:w-72 h-48 w-48 object-cover rounded-lg hover:drop-shadow-lg"
    //                                     />
    //                                     <p className="mt-4 lg:text-2xl font-medium">Cine Foro</p>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </section>
    //         </main>
    //     </>
    // );
}
