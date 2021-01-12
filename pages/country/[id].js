import Head from 'next/head'

import getCountryIDs from 'data/getCountryIDs'

import getCountry from 'data/getCountry'
// import getStates from 'data/getStates'
// import getCities from 'data/getCities'

import DefaultLayout from 'layouts/DefaultLayout'

export async function getStaticProps(context) {
  const id = context.params.id

  const country = await getCountry(id)
  // const states = await getStates(id)
  // const cities = await getCities(id)

  return {
    props: {
      country,
      // states,
      // cities
    },
  }
}

export async function getStaticPaths() {
  const ids = await getCountryIDs()

  const paths = ids.map((id) => ({ params: id }))

  return {
    paths,
    fallback: true,
  }
}

export default function HomePage(props) {
  const { country } = props

  return (
    <div className="HomePage" style={{ height: '100%' }}>
      <Head>
        <title>Country</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout title={country.name} back="World" backUrl="/world">
        CountryPage .{country.id}.
      </DefaultLayout>
    </div>
  )
}
