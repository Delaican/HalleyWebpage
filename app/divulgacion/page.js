import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";

import { components } from '../../slices'

export default async function Divulgacion() {
    const client = createClient();

    const page = await client.getByUID('page', 'divulgacion')

    return (
        <>
            <main>
                <SliceZone slices={page.data.slices} components={components} />
            </main>
        </>
    );
}
