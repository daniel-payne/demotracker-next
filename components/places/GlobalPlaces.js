import { useState } from 'react'

import css from 'styled-jsx/css'

import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'

import FullscreenIcon from '@material-ui/icons/Fullscreen'
import SearchIcon from '@material-ui/icons/Search'
import ExploreOnIcon from '@material-ui/icons/Explore'

import Link from 'materialUI/Link.js'

import GlobalInformation from 'components/informations/GlobalInformation'
import CountryInformation from 'components/informations/CountryInformation'

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
export default function GlobalPlaces() {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const GroupSeparator = () => {
    return <div style={{ height: 4 }}>&nbsp;</div>
  }

  return (
    <div className="GlobalPlaces">
      <Toolbar>
        <div style={{ flexGrow: 1 }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Places" />
            <Tab label="People" />
            <Tab label="Facilities" />
          </Tabs>
        </div>
        <IconButton color="primary" aria-label="search">
          <SearchIcon />
        </IconButton>
        <IconButton color="primary" aria-label="search">
          <ExploreOnIcon />
        </IconButton>
        <IconButton color="primary" aria-label="search">
          <FullscreenIcon />
        </IconButton>
      </Toolbar>
      <div className="guttered">
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
      </div>
      <style jsx>{style}</style>
    </div>
  )
}

const style = css`
  .GlobalPlaces {
  }
  .guttered {
    padding: 16px;
  }
`
