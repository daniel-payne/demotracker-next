import useSWR from 'swr'

import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import OptionIcon from 'layouts/components/icons/OptionIcon'

export default function OptionsList(props) {
  const { selected, source, onSelect } = props

  const { data, error } = useSWR('/api/options')

  const { name, defaultOption, options } = data ? data[source] || {} : {}

  const handelSelect = (event, newValue) => {
    if (onSelect) {
      onSelect(event, newValue)
    }
  }

  return (
    <List>
      <ListSubheader disableSticky={true}>{name}</ListSubheader>

      {options &&
        options.map((option, i) => {
          const isSelected = selected ? option.id === selected.substr(0, 4) : option.id === defaultOption

          return (
            <ListItem button key={option.id} selected={isSelected} onClick={(event) => handelSelect(event, option.id)}>
              <OptionIcon option={option} isSelected={isSelected} />
              <ListItemText primary={option.name} secondary={option.info} />
            </ListItem>
          )
        })}
    </List>
  )
}
