import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import AssignmentIcon from '@material-ui/icons/Assignment'
import MapIcon from '@material-ui/icons/Map'
import PublicIcon from '@material-ui/icons/Public'

import useShowQuery from 'hooks/useShowQuery'

const showOptions = {
  DATA: 0,
  MAP: 1,
  GLOBE: 2,
}

const textToShowIndex = (text) => {
  return showOptions[text] || 0
}

const indexToShowText = (index) => {
  return Object.keys(showOptions)[index]
}

export default function FooterBar() {
  const router = useRouter()

  const [showQuery, setShowQuery] = useShowQuery()

  const initialIndex = textToShowIndex(showQuery)

  const [selectedIndex, setSelectedIndex] = useState(initialIndex)

  const handleChange = (event, newValue) => {
    const newText = indexToShowText(newValue)

    setShowQuery(newText)

    setSelectedIndex(newValue)
  }

  useEffect(() => {
    const newIndex = textToShowIndex(router.query.show)

    if (newIndex !== selectedIndex) {
      setSelectedIndex(newIndex)
    }
  }, [router.query.show])

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
