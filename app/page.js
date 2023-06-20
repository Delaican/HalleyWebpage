import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";

import { components } from '../slices'


export default async function HomePage() {
  const client = createClient();

  const page = await client.getSingle('homepage')

  return (
    <>
      <main>
        <SliceZone slices={page.data.slices} components={components} />
      </main>
    </>
  );
}