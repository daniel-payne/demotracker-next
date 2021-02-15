import { useRouter } from 'next/router'

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

export default function CountryInformation(props) {
  const { country } = props

  const { incidentCount, residentCount, facilitiesCount, travelerCount, bookingCount } = country

  const { CountryInformation, seperator, padded } = useStyles()

  const router = useRouter()

  const { query } = router

  const path = `/country/${country.id}`

  const href = convertPathQueryToString(path, query)

  return (
    <div className={CountryInformation}>
      <Button variant="outlined" color="primary" component={Link} naked href={href}>
        <span>{country.name}</span>

        <CountIndicator count={residentCount} Icon={HomeIcon} small></CountIndicator>
        <CountIndicator count={facilitiesCount} Icon={BusinessIcon} small></CountIndicator>
        <CountIndicator count={travelerCount} Icon={FlightTakeoffIcon} small></CountIndicator>
        <CountIndicator count={bookingCount} Icon={FlightLandIcon} small></CountIndicator>
        <CountIndicator count={incidentCount} Icon={AnnouncementIcon}></CountIndicator>
      </Button>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  CountryInformation: {
    display: 'inline-block',
    margin: 4,
  },
  seperator: {
    width: 24,
  },
  padded: { paddingLeft: 4 },
}))
