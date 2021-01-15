import { useState } from 'react'

import css from 'styled-jsx/css'

import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import IconButton from '@material-ui/core/IconButton'

import FullscreenIcon from '@material-ui/icons/Fullscreen'
import DateRangeIcon from '@material-ui/icons/DateRange'

export default function GlobalEvents() {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className="GlobalEvents">
      <Toolbar>
        <div style={{ flexGrow: 1 }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Latest Travel Alerts" />
            <Tab label="Latest Wikipedia Reports" />
          </Tabs>
        </div>
      </Toolbar>
      <style jsx>{style}</style>
    </div>
  )
}

const style = css`
  .GlobalEvents {
  }
`
