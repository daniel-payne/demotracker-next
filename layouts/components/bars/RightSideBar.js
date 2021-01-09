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

  const [events, setEvents] = useEventsQuery()
  const [people, setPeople] = usePeopleQuery()
  const [filter, setFilter] = useFilterQuery()

  const handleSelectEvents = (event, newValue) => {
    setEvents(newValue)
  }

  const handleSelectPeople = (event, newValue) => {
    setPeople(newValue)
  }

  const handleSelectFilter = (event, newValue) => {
    setFilter(newValue)
  }

  return (
    <SwipeableDrawer anchor="right" open={open} onClose={onClose} onOpen={onOpen}>
      <OptionsList source="/api/options/events" selected={events} onSelect={handleSelectEvents} />
      <Divider />
      <OptionsList source="/api/options/people" selected={people} onSelect={handleSelectPeople} />
      <Divider />
      <OptionsList source="/api/options/filter" selected={filter} onSelect={handleSelectFilter} />
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
