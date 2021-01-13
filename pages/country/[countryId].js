import { useState } from 'react'

import Head from 'next/head'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ExploreOffIcon from '@material-ui/icons/ExploreOff'
import IconButton from '@material-ui/core/IconButton'

import Typography from '@material-ui/core/Typography'

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

function CountryInformation() {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div>
      <Toolbar>
        <Tabs left value={value} onChange={handleChange}>
          <Tab label="CIA FactBook" />
          <Tab label="UK Foreign Office" />
          <Tab label="US State Department" />
          <Tab label="Indices" />
        </Tabs>
      </Toolbar>
    </div>
  )
}

function CountryPeople() {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div>
      <Toolbar>
        <Tabs left value={value} onChange={handleChange}>
          <Tab label="Residents (None)" />
          <Tab label="Currently Present (12)" />
          <Tab label="Current &amp; Future (43)" />
        </Tabs>
      </Toolbar>
    </div>
  )
}

function CountryEvents() {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div>
      <Toolbar>
        <Tabs left value={value} onChange={handleChange}>
          <Tab label="Wikipedia Reports" />
          <Tab label="Global Terrorism" />
          <Tab label="Travel Alerts" />
        </Tabs>
      </Toolbar>
    </div>
  )
}

function CountryStatesCities() {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div>
      {/* <Tabs left value={value} onChange={handleChange}>
        <Tab label="Wikipedia Reports" />
        <Tab label="Global Terrorism" />
      </Tabs> */}
      <Toolbar>
        <div style={{ flexGrow: 1 }}>
          <Tabs left value={value} onChange={handleChange}>
            <Tab label="States" />
            <Tab label="Cities" />
          </Tabs>
        </div>
        <IconButton color="primary" aria-label="search">
          <ExploreOffIcon />
        </IconButton>
      </Toolbar>
    </div>
  )
}

export default function CountryPage(props) {
  const { country, states } = props

  return (
    <div className="HomePage" style={{ height: '100%' }}>
      <Head>
        <title>Country</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout title={country.name} back="The World" backUrl="/world">
        <div style={{ width: '100%', height: '100%', padding: 8, backgroundColor: '#F0F0F0' }}>
          <Grid container style={{ height: 'calc(100% - 16px)' }}>
            <Grid item xs={3}>
              <Paper style={{ height: 'calc(100% - 4px)', margin: 8 }}>
                <CountryStatesCities />
              </Paper>
            </Grid>
            <Grid item xs={5}>
              <Paper style={{ height: 'calc(66% - 4px)', margin: 8 }}>
                <CountryInformation />
              </Paper>
              <Paper style={{ height: 'calc(34% - 4px)', margin: 8 }}>
                <CountryPeople />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style={{ height: '100%', margin: 8 }}>
                <CountryEvents />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </DefaultLayout>
    </div>
  )
}
