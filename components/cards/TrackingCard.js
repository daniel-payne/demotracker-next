import { useState } from 'react'

import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'

import FullscreenIcon from '@material-ui/icons/Fullscreen'
import SettingsIcon from '@material-ui/icons/Settings'
import ExploreOnIcon from '@material-ui/icons/Explore'

import { makeStyles } from '@material-ui/core/styles'

import Link from 'materialUI/Link.js'

import GlobalInformation from 'components/informations/GlobalInformation'
import CountryInformation from 'components/informations/CountryInformation'

import PlacesList from 'components/lists/PlacesList'
import PeopleList from 'components/lists/PeopleList'
import FacilitiesList from 'components/lists/FacilitiesList'

import CardManager from 'components/managers/CardManager'
import GroupSeperator from 'components/seperator/GroupSeparator'

const savedCountries = [
  { name: 'United Kingdom', id: '80' },
  { name: 'India', id: '9' },
  { name: 'Congo', id: '32' },
]

const savedStates = [
  { text: 'Essex (United Kingdom)', href: '/country/80' },
  { text: 'Hertfordshire (United Kingdom)', href: '/country/80' },
  { text: 'Cornwall (United Kingdom)', href: '/country/80' },
  { text: 'Hyderabad (India)', href: '/country/9' },
  { text: 'New York (United States)', href: '/country/9' },
]
export default function TrackingCard() {
  const { TrackingCard, guttered } = useStyles()

  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={TrackingCard}>
      <Toolbar>
        <div style={{ flexGrow: 1 }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Places" />
            <Tab label="People" />
            <Tab label="Facilities" />
          </Tabs>
        </div>
        <IconButton color="primary" aria-label="search">
          <SettingsIcon />
        </IconButton>
        <IconButton color="primary" aria-label="search">
          <ExploreOnIcon />
        </IconButton>
        <IconButton color="primary" aria-label="search">
          <FullscreenIcon />
        </IconButton>
      </Toolbar>
      <div className={guttered}>
        {value === 0 && <PlacesList />}
        {value === 1 && <PeopleList />}
        {value === 2 && <FacilitiesList />}
      </div>
      {/* <div className="guttered">
        <GlobalInformation />
        <GroupSeparator />
        <Divider variant="fullWidth" />
        <GroupSeparator />
        {savedCountries.map((country) => {
          return <CountryInformation key={country.id} country={country} />
        })}
        <GroupSeparator />
        <Divider variant="fullWidth" />
        <GroupSeparator />
        {savedStates.map((link, i) => {
          return (
            <div style={{ padding: 4, marginRight: 8, display: 'inline-block' }} key={i}>
              <Button variant="outlined" color="primary" component={Link} naked href={link.href}>
                {link.text}
              </Button>
            </div>
          )
        })}
      </div> */}
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  TrackingCard: {},
  guttered: {
    padding: '8px 24px',
  },
}))
