import { useEffect } from 'react'
import { useRouter } from 'next/router'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import OptionsList from 'layouts/components/list/OptionsList'

import useEventsQuery from 'hooks/useEventsQuery'
import usePeopleQuery from 'hooks/usePeopleQuery'
import useFilterQuery from 'hooks/useFilterQuery'

export default function RightSideBar(props) {
  const { open, onOpen, onClose } = props

  const router = useRouter()

  const [selectedEvents, setSelectedEvents] = useEventsQuery()
  const [selectedPeople, setSelectedPeople] = usePeopleQuery()
  const [selectedFilter, setSelectedFilter] = useFilterQuery()

  const handleSelectEvents = (event, newValue) => {
    setSelectedEvents(newValue)
  }

  const handleSelectPeople = (event, newValue) => {
    setSelectedPeople(newValue)
  }

  const handleSelectFilter = (event, newValue) => {
    setSelectedFilter(newValue)
  }

  return (
    <SwipeableDrawer anchor="right" open={open} onClose={onClose} onOpen={onOpen}>
      <OptionsList
        source="/api/options/events"
        selected={selectedEvents}
        onSelect={handleSelectEvents}
      />
      <Divider />
      <OptionsList
        source="/api/options/people"
        selected={selectedPeople}
        onSelect={handleSelectPeople}
      />
      <Divider />
      <OptionsList
        source="/api/options/filter"
        selected={selectedFilter}
        onSelect={handleSelectFilter}
      />
      <Divider />
      <List style={{ maxWidth: 364 }}>
        <ListItem>
          <ListItemText
            primary="Due to license restrictions we can not freely share the Global Terrorism Database or Voyage Manager Events"
            secondary="If you are a registered user of Voyage Manager please contact our partner for an access instructions"
          />
        </ListItem>
      </List>
    </SwipeableDrawer>
  )
}
