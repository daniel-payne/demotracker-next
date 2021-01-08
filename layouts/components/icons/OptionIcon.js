import ListItemIcon from '@material-ui/core/ListItemIcon'

import LocationOnIcon from '@material-ui/icons/LocationOn'
import LocationOffIcon from '@material-ui/icons/LocationOff'

import GpsFixedIcon from '@material-ui/icons/GpsFixed'
import GpsOffIcon from '@material-ui/icons/GpsOff'

import ExploreOffIcon from '@material-ui/icons/ExploreOff'
import ExploreIcon from '@material-ui/icons/Explore'

export default function OptionIcon(props) {
  const { option, isSelected } = props

  const color = isSelected ? 'primary' : undefined

  const icons = {
    NOEO: <LocationOffIcon color={color} />,
    WITR: <LocationOnIcon color={color} />,
    GLTD: <LocationOnIcon color={color} />,
    VOME: <LocationOnIcon color={color} />,

    NOPO: <GpsOffIcon color={color} />,
    CUPO: <GpsFixedIcon color={color} />,
    CUFP: <GpsFixedIcon color={color} />,

    ALLR: <ExploreOffIcon color={color} />,
    RECD: <ExploreIcon color={color} />,
  }

  const icon = option.id && icons[option.id] ? icons[option.id] : null

  if (icon) {
    return <ListItemIcon>{icon}</ListItemIcon>
  }

  return null
}
