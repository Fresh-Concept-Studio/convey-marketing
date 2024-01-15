import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { SupportHeader } from '@/components/SupportHeader'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Convey - Realtime event updates</title>
        <meta
          name="description"
          content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
        />
      </Head>
      <Header />
      <main>
        <SupportHeader />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
