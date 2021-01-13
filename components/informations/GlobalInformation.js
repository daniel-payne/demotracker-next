import { useRouter } from 'next/router'

import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge'

import MailIcon from '@material-ui/icons/Mail'
import PeopleIcon from '@material-ui/icons/People'
import LocationOnIcon from '@material-ui/icons/LocationOn'

import Link from 'materialUI/Link.js'

import convertPathQueryToString from 'utils/convertPathQueryToString'

export default function CountryInformation(props) {
  const router = useRouter()

  const { query } = router

  const path = `/world`

  const href = convertPathQueryToString(path, query)

  console.log(href)

  return (
    <div style={{ display: 'inline-block', margin: 4 }}>
      <Button variant="contained" color="primary" disableElevation component={Link} naked href={href}>
        <span>World</span>
        <div style={{ width: 24 }}>&nbsp;</div>
        <LocationOnIcon />
        123
      </Button>
    </div>
  )
}
