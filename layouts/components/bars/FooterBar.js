import { useState } from 'react'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import AssignmentIcon from '@material-ui/icons/Assignment'
import MapIcon from '@material-ui/icons/Map'
import PublicIcon from '@material-ui/icons/Public'

export default function FooterBar() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleChange = (event, newValue) => {
    setSelectedIndex(newValue)
  }

  return (
    <div className="FooterBar">
      <BottomNavigation
        style={{
          position: 'relative',
          bottom: 0,
        }}
        value={selectedIndex}
        onChange={handleChange}
        showLabels
      >
        <BottomNavigationAction label="Data" icon={<AssignmentIcon />} />
        <BottomNavigationAction label="Map" icon={<MapIcon />} />
        <BottomNavigationAction label="Globe" icon={<PublicIcon />} />
      </BottomNavigation>
    </div>
  )
}
