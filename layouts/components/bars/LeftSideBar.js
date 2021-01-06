import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import OptionsList from 'layouts/components/list/OptionsList'

export default function LeftSideBar(props) {
  const { open, onOpen, onClose } = props

  return (
    <SwipeableDrawer anchor="left" open={open} onClose={onClose} onOpen={onOpen}>
      <OptionsList source="/api/options/data" selected="GLTD-1970" />
      <Divider />
      <OptionsList source="/api/options/people" selected="NOPO" />
      <Divider />
      <OptionsList source="/api/options/display" selected="ALLR" />
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
