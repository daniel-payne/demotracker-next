import Head from 'next/head'
import Link from 'next/link'

import useSWR from 'swr'

import DefaultLayout from 'layouts/DefaultLayout'

export default function WorldPage() {
  return (
    <div className="WorldPage" style={{ height: '100%' }}>
      <Head>
        <title>Worldview | World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <h4>WorldPage</h4>
      </DefaultLayout>
    </div>
  )
}
