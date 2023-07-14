import { createClient } from '@/prismicio'
import { SliceZone } from '@prismicio/react'

import { components } from '../../slices'

export default async function Page({ params }) {
  const client = createClient()

  const page = await client.getByUID('page', params.uid)

  return (
    <>
            <main>
                <SliceZone slices={page.data.slices} components={components} />
            </main>
        </>
  )
}

export async function generateStaticParams() {
  const client = createClient()

  const pages = await client.getAllByType('page')

  return pages.map((page) => {
    return { uid: page.uid }
  })
}