import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";

import { components } from '../../slices'

export default async function VecinosYAmigos() {
    const client = createClient();

    const page = await client.getByUID('page', 'vecinos-y-amigos')

    return (
        <>
            <main>
                <SliceZone slices={page.data.slices} components={components} />
            </main>
        </>
    );
}
