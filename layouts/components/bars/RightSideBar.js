import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import OptionsList from 'layouts/components/list/OptionsList'

import useEventsOverlayQuery from 'hooks/useEventsOverlayQuery'
import usePeopleOverlayQuery from 'hooks/usePeopleOverlayQuery'
import useFilterOverlayQuery from 'hooks/useFilterOverlayQuery'

export default function RightSideBar(props) {
  const { open, onClose } = props

  const [events, setEvents] = useEventsOverlayQuery()
  const [people, setPeople] = usePeopleOverlayQuery()
  const [filter, setFilter] = useFilterOverlayQuery()

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
    <Drawer anchor="right" open={open} onClose={onClose}>
      <OptionsList source="events" selected={events} onSelect={handleSelectEvents} />
      <Divider />
      <OptionsList source="people" selected={people} onSelect={handleSelectPeople} />
      <Divider />
      <OptionsList source="filter" selected={filter} onSelect={handleSelectFilter} />
      <Divider />
      <List style={{ maxWidth: 364 }}>
        <ListItem>
          <ListItemText
            primary="Due to license restrictions we can not freely share the Global Terrorism Database or Voyage Manager Events"
            secondary="If you are a registered user of Voyage Manager please contact our partner for an access instructions"
          />
        </ListItem>
      </List>
    </Drawer>
  )
}
