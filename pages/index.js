import Head from 'next/head'

export default function HomePage() {
  return (
    <div className="HomePage" style={{ height: '100%' }}>
      <Head>
        <title>Worldview</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      HomePage
    </div>
  )
}
