import Head from 'next/head'

import getCountries from 'data/getCountries'

import CountriesList from 'components/country/CountriesList'

import useShowQuery from 'hooks/useShowQuery'

export async function getStaticProps(context) {
  const countries = await getCountries()

  return {
    props: { countries },
  }
}

import DefaultLayout from 'layouts/DefaultLayout'

export default function WorldPage(props) {
  const { countries } = props

  const [show] = useShowQuery()

  return (
    <div className="WorldPage" style={{ height: '100%' }}>
      <Head>
        <title>Worldview | World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout title="World">
        <CountriesList countries={countries} />
      </DefaultLayout>
    </div>
  )
}
