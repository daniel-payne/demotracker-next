import { useState } from 'react'

import css from 'styled-jsx/css'

import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

import FullscreenIcon from '@material-ui/icons/Fullscreen'
import SettingsIcon from '@material-ui/icons/Settings'
import ExploreOnIcon from '@material-ui/icons/Explore'

import PeopleIcon from '@material-ui/icons/People'
import LocationOnIcon from '@material-ui/icons/LocationOn'

const DataSeparator = () => {
  return <div style={{ width: 24 }}>&nbsp;</div>
}

export default function GlobalLocations() {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className="GlobalLocations">
      <Toolbar>
        <div style={{ flexGrow: 1 }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Current Positions" />
            <Tab label="Current &amp; Future Positions" />
            <Tab label="Facilities" />
            <Tab label="All People &amp; Facilities" />
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

      <Button variant="outlined" color="primary">
        <span>David Smith</span>
        <DataSeparator />
        <LocationOnIcon />
        <span>London</span>
        <DataSeparator />
        <PeopleIcon />
        <span> 43</span>
      </Button>

      <style jsx>{style}</style>
    </div>
  )
}

const style = css`
  .GlobalLocations {
  }
  .guttered {
    padding: 16px;
  }
`
