import Head from 'next/head'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import getCountryIDs from 'data/getCountryIDs'

import getCountry from 'data/getCountry'
import getStates from 'data/getStates'
// import getCities from 'data/getCities'

import DefaultLayout from 'layouts/DefaultLayout'

export async function getStaticProps(context) {
  const id = context.params.countryId

  const country = await getCountry(id)
  const states = await getStates(id)
  // const cities = await getCities(id)

  return {
    props: {
      country,
      states,
      // cities
    },
  }
}

export async function getStaticPaths() {
  const ids = await getCountryIDs()

  const paths = ids.map((item) => ({ params: { countryId: item.id } }))

  return {
    paths,
    fallback: true,
  }
}

export default function HomePage(props) {
  const { country, states } = props

  return (
    <div className="HomePage" style={{ height: '100%' }}>
      <Head>
        <title>Country</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout title={country.name} back="World" backUrl="/world">
        <div style={{ width: '100%', height: '100%', padding: 8, backgroundColor: '#F0F0F0' }}>
          <Grid container style={{ height: 'calc(100% - 16px)' }}>
            <Grid item xs={4}>
              <Paper style={{ height: 'calc(50% - 4px)', margin: 8 }}>States</Paper>
              <Paper style={{ height: 'calc(50% - 4px)', margin: 8 }}>Cities</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style={{ height: 'calc(66% - 4px)', margin: 8 }}>Information</Paper>
              <Paper style={{ height: 'calc(34% - 4px)', margin: 8 }}>People</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style={{ height: '100%', margin: 8 }}>Event Time Line</Paper>
            </Grid>
          </Grid>
        </div>
      </DefaultLayout>
    </div>
  )
}
