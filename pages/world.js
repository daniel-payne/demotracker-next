import { useState } from 'react'

import Head from 'next/head'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import ExploreOffIcon from '@material-ui/icons/ExploreOff'
import IconButton from '@material-ui/core/IconButton'

import getCountries from 'data/getCountries'

import CountriesList from 'components/lists/CountriesList'

import useShowQuery from 'hooks/useShowQuery'

export async function getStaticProps(context) {
  const countries = await getCountries()

  return {
    props: { countries },
  }
}

import DefaultLayout from 'layouts/DefaultLayout'

function CountryInformation() {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div>
      <Tabs centered value={value} onChange={handleChange}>
        <Tab label="CIA FactBook" />
        <Tab label="UK Foreign Office" />
        <Tab label="US State Department" />
        <Tab label="Indices" />
      </Tabs>
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
      <Tabs centered value={value} onChange={handleChange}>
        <Tab label="Residents (None)" />
        <Tab label="Currently Present (12)" />
        <Tab label="Current &amp; Future (43)" />
      </Tabs>
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
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Travel Alerts" />
          <Tab label="Wikipedia Reports" />
          <Tab label="Global Terrorism" />
        </Tabs>
      </Toolbar>
    </div>
  )
}

function CountryStates() {
  return (
    <div>
      <Typography variant="caption" gutterBottom color="textSecondary">
        States
      </Typography>
    </div>
  )
}

function CountryCities() {
  return (
    <div>
      <Typography variant="caption" gutterBottom color="textSecondary">
        Cities
      </Typography>
    </div>
  )
}

export default function WorldPage(props) {
  const { countries } = props

  const [show] = useShowQuery()

  return (
    <div className="WorldPage" style={{ height: '100%' }}>
      <Head>
        <title>Worldview | World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout title="The World">
        <div
          style={{
            width: '100%',
            height: '100%',
            padding: 8,
            backgroundColor: '#F0F0F0',
          }}
        >
          <Grid container style={{ height: 'calc(100% - 16px)' }}>
            <Grid item xs={8} style={{ height: '100%' }}>
              <Paper style={{ height: '100%', margin: 8, overflow: 'auto' }}>
                <Toolbar>
                  <div style={{ flexGrow: 1 }}>
                    <Tabs value={0}>
                      <Tab label="Countries" />
                    </Tabs>
                  </div>
                  <IconButton color="primary" aria-label="search">
                    <ExploreOffIcon />
                  </IconButton>
                </Toolbar>

                <CountriesList countries={countries} />
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
