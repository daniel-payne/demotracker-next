import { useRouter } from 'next/router'

import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'

import AnnouncementIcon from '@material-ui/icons/Announcement'
import BusinessIcon from '@material-ui/icons/Business'
import HomeIcon from '@material-ui/icons/Home'
import FlightLandIcon from '@material-ui/icons/FlightLand'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'

import { makeStyles } from '@material-ui/core/styles'

import Link from 'materialUI/Link.js'

import CountIndicator from 'components/indicators/CountIndicator'

import convertPathQueryToString from 'utils/convertPathQueryToString'

export default function StateInformation(props) {
  const { state } = props

  const { country, incidentCount, residentCount, facilitiesCount, travelerCount, bookingCount } = state

  const { StateInformation, seperator, padded } = useStyles()

  const router = useRouter()

  const { query } = router

  const path = `/state/${state.id}`

  const href = convertPathQueryToString(path, query)

  return (
    <div className={StateInformation}>
      <ButtonGroup variant="outlined" color="primary">
        <Button component={Link} naked href={href}>
          <span>{state.name}</span>

          <CountIndicator count={residentCount} Icon={HomeIcon} small></CountIndicator>
          <CountIndicator count={facilitiesCount} Icon={BusinessIcon} small></CountIndicator>
          <CountIndicator count={travelerCount} Icon={FlightTakeoffIcon} small></CountIndicator>
          <CountIndicator count={bookingCount} Icon={FlightLandIcon} small></CountIndicator>
          <CountIndicator count={incidentCount} Icon={AnnouncementIcon} small primary></CountIndicator>
        </Button>
        <Button component={Link} naked href={href}>
          <span>{country.name}</span>
        </Button>
      </ButtonGroup>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  StateInformation: {
    display: 'inline-block',
    margin: 4,
  },
  seperator: {
    width: 24,
  },
  padded: { paddingLeft: 4 },
}))
