import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'
import { createClient } from "@/prismicio";

import './globals.css'
import Header from './components/header';
import Footer from './components/footer';
export default async function RootLayout({ children }) {
  const client = createClient();

  const header = await client.getSingle("header")

  return (
    <html lang="en">
      <body>
        <Header headerData={header} />
        {children}
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}