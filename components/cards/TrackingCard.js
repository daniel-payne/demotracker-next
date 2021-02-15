import { useState } from 'react'

import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import IconButton from '@material-ui/core/IconButton'

import FullscreenIcon from '@material-ui/icons/Fullscreen'
import SettingsIcon from '@material-ui/icons/Settings'
import ExploreOnIcon from '@material-ui/icons/Explore'

import { makeStyles } from '@material-ui/core/styles'

import PlacesList from 'views/lists/PlacesList'
import PeopleList from 'views/lists/PeopleList'
import FacilitiesList from 'components/lists/FacilitiesList'

export default function PlacesCard() {
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
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  TrackingCard: {},
  guttered: {
    padding: '8px 24px',
  },
}))
