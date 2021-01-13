import { useState } from 'react'

import Head from 'next/head'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

// import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
// import Typography from '@material-ui/core/Typography'
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'
import ExploreOffIcon from '@material-ui/icons/ExploreOff'

import Link from 'materialUI/Link.js'

// import getCountries from 'data/getCountries'

// import CountriesList from 'components/country/CountriesList'

// import useShowQuery from 'hooks/useShowQuery'

import DashboardLayout from 'layouts/DashboardLayout'

const testLinks = [
  { text: 'United Kingdom', href: '/country/80' },
  { text: 'India', href: '/country/9' },
]

function GlobalEvents() {
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

export default function IndexPage() {
  return (
    // <Container maxWidth="sm">
    //   <Box my={4}>
    //     <Typography variant="h4" component="h1" gutterBottom>
    //       World View Dashboard
    //     </Typography>
    //     <div style={{ padding: 4, marginRight: 8, display: 'inline-block' }}>
    //       <Link href="/about" color="secondary">
    //         About
    //       </Link>
    //     </div>
    //     <br />
    //     {testLinks.map((link, i) => {
    //       return (
    //         <div style={{ padding: 4, marginRight: 8, display: 'inline-block' }} key={i}>
    //           <Button variant="contained" color="primary" component={Link} naked href={link.href}>
    //             {link.text}
    //           </Button>
    //         </div>
    //       )
    //     })}
    //   </Box>
    // </Container>
    <div className="DashboardPage" style={{ height: '100%' }}>
      <Head>
        <title>Worldview </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout title="Worldview Dashboard">
        <div
          style={{
            width: '100%',
            height: '100%',
            padding: 8,
            backgroundColor: '#F0F0F0',
          }}
        >
          <Grid container style={{ height: 'calc(100% - 16px)' }}>
            <Grid item xs={7} style={{ height: '100%' }}>
              <Paper style={{ height: 'calc(50% - 4px)', margin: 8, overflow: 'auto' }}>
                <Toolbar>
                  <div style={{ flexGrow: 1 }}>
                    <Tabs left value={0}>
                      <Tab label="Places" />
                    </Tabs>
                  </div>
                  <IconButton color="primary" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Toolbar>
                <div style={{ padding: 16 }}>
                  <div style={{ padding: 4, marginRight: 8, display: 'inline-block' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      naked
                      href="/world"
                    >
                      World
                    </Button>
                  </div>
                  {testLinks.map((link, i) => {
                    return (
                      <div style={{ padding: 4, marginRight: 8, display: 'inline-block' }} key={i}>
                        <Button
                          variant="outlined"
                          color="primary"
                          component={Link}
                          naked
                          href={link.href}
                        >
                          {link.text}
                        </Button>
                      </div>
                    )
                  })}
                </div>
              </Paper>
              <Paper style={{ height: 'calc(50% - 4px)', margin: 8, overflow: 'auto' }}>
                <Toolbar>
                  <div style={{ flexGrow: 1 }}>
                    <Tabs left value={0}>
                      <Tab label="Current Positions" />
                      <Tab label="Current &amp; Future Positions" />
                      <Tab label="Facilities" />
                      <Tab label="All People &amp; Facilities" />
                    </Tabs>
                  </div>
                  <IconButton color="primary" aria-label="search">
                    <ExploreOffIcon />
                  </IconButton>
                </Toolbar>
              </Paper>
            </Grid>

            <Grid item xs={5}>
              <Paper style={{ height: '100%', margin: 8 }}>
                <GlobalEvents />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    </div>
  )
}
