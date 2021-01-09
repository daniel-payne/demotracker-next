import Head from 'next/head'

export async function getStaticProps(context) {
  return {
    props: {},
  }
}

import DefaultLayout from 'layouts/DefaultLayout'

export default function WorldPage() {
  return (
    <div className="WorldPage" style={{ height: '100%' }}>
      <Head>
        <title>Worldview | World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout title="World">
        <h4>WorldPage</h4>
      </DefaultLayout>
    </div>
  )
}
