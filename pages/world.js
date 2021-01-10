import Head from 'next/head'

import getCountries from 'data/getCountries'

export async function getStaticProps(context) {
  const countries = await getCountries()

  return {
    props: { countries },
  }
}

import DefaultLayout from 'layouts/DefaultLayout'

export default function WorldPage(props) {
  const { countries } = props

  return (
    <div className="WorldPage" style={{ height: '100%' }}>
      <Head>
        <title>Worldview | World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout title="World">
        <h4>WorldPage</h4>
        <pre>{JSON.stringify(countries, null, 2)}</pre>
      </DefaultLayout>
    </div>
  )
}
