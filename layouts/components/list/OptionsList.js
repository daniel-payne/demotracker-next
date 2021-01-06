import useSWR from 'swr'

import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import OptionIcon from 'layouts/components/icons/OptionIcon'

export default function OptionsList(props) {
  const { selected, source } = props

  const { data, error } = useSWR(source)

  const { name, defaultOption, options } = data || {}

  return (
    <List>
      <ListSubheader disableSticky={true}>{name}</ListSubheader>

      {options &&
        options.map((option, i) => {
          const isSelected = selected
            ? option.id === selected.substr(0, 4)
            : option.id === defaultOption

          return (
            <ListItem button key={option.id} selected={isSelected}>
              <OptionIcon option={option} isSelected={isSelected} />
              <ListItemText primary={option.name} secondary={option.info} />
            </ListItem>
          )
        })}
    </List>
  )
}
