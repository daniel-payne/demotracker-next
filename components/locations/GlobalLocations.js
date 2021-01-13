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
import PersonIcon from '@material-ui/icons/Person'
import HomeIcon from '@material-ui/icons/Home'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import CardTravelIcon from '@material-ui/icons/CardTravel'
import FlightLandIcon from '@material-ui/icons/FlightLand'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'
import BusinessIcon from '@material-ui/icons/Business'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import AirlineSeatReclineExtraIcon from '@material-ui/icons/AirlineSeatReclineExtra'
import AnnouncementIcon from '@material-ui/icons/Announcement'

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
            <Tab label="All People &amp; Facilities" />
            <Tab label="Residents" />
            <Tab label="Current Travelers" />
            <Tab label="Future Bookings" />
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
        <HomeIcon fontSize="small" color="secondary" />
        <span>London (United Kingdom)</span>
        <DataSeparator />
        <AnnouncementIcon />
        <span>&nbsp;3</span>
        {/* 
        <DataSeparator />
        <CardTravelIcon color="secondary" />
        <span>Rome (Italy)</span>
        <LocationOnIcon fontSize="small" />
        <span>1</span>

        <DataSeparator />
        <CardTravelIcon color="secondary" />
        <span>Frankfurt (Germany)</span> */}
      </Button>
      <br />

      <Button variant="outlined" color="primary">
        <span>France</span>
        <DataSeparator />
        <PersonIcon fontSize="small" color="secondary" />
        <span>Paula Green</span>
        <DataSeparator />
        <FlightLandIcon fontSize="small" color="secondary" />
        &nbsp;
        <span style={{ fontSize: 'x-small' }}>In 3 Days&nbsp;</span>
        <span style={{ fontSize: 'x-small' }}>, after 5 Days&nbsp;</span>
        &nbsp;
        <FlightTakeoffIcon fontSize="small" color="secondary" />
        <DataSeparator />
        <AnnouncementIcon />
        <span>&nbsp;7</span>
      </Button>

      <br />
      <Button variant="outlined" color="primary">
        <span>UK Office</span>
        <DataSeparator />
        <BusinessIcon fontSize="small" color="secondary" />
        <span>London (United Kingdom)</span>
        <DataSeparator />
        <AnnouncementIcon />
        <span>&nbsp;3</span>
        {/* 
        <DataSeparator />
        <CardTravelIcon color="secondary" />
        <span>Rome (Italy)</span>
        <LocationOnIcon fontSize="small" />
        <span>1</span>

        <DataSeparator />
        <CardTravelIcon color="secondary" />
        <span>Frankfurt (Germany)</span> */}
      </Button>

      <br />
      <Button variant="outlined" color="primary">
        <span>United Kingdom</span>

        <DataSeparator />
        <HomeIcon fontSize="small" color="secondary" />
        <span>3</span>

        <DataSeparator />
        <BusinessIcon fontSize="small" color="secondary" />
        <span>1</span>

        <DataSeparator />
        <FlightTakeoffIcon fontSize="small" color="secondary" />
        <span>2</span>
        <DataSeparator />
        <FlightLandIcon fontSize="small" color="secondary" />
        <span>13</span>

        <DataSeparator />
        <AnnouncementIcon />
        <span>&nbsp;3</span>

        {/* 
        <DataSeparator />
        <CardTravelIcon color="secondary" />
        <span>Rome (Italy)</span>
        <LocationOnIcon fontSize="small" />
        <span>1</span>

        <DataSeparator />
        <CardTravelIcon color="secondary" />
        <span>Frankfurt (Germany)</span> */}
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
