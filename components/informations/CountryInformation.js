import { useRouter } from 'next/router'

import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge'

import MailIcon from '@material-ui/icons/Mail'
import PeopleIcon from '@material-ui/icons/People'
import LocationOnIcon from '@material-ui/icons/LocationOn'

import Link from 'materialUI/Link.js'

import convertPathQueryToString from 'utils/convertPathQueryToString'

export default function CountryInformation(props) {
  const { country } = props

  const router = useRouter()

  const { query } = router

  const path = `/country/${country.id}`

  const href = convertPathQueryToString(path, query)

  const DataSeparator = () => {
    return <div style={{ width: 24 }}>&nbsp;</div>
  }

  return (
    <div style={{ display: 'inline-block', margin: 4 }}>
      <Button variant="outlined" color="primary" component={Link} naked href={href}>
        <span>{country.name}</span>
        <DataSeparator />
        <LocationOnIcon />
        <span>1,233</span>
        <DataSeparator />
        <PeopleIcon />
        <span> 43</span>
      </Button>
    </div>
  )
}
