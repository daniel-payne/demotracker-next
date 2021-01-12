import { useRouter } from 'next/router'

import Button from '@material-ui/core/Button'

import Link from 'materialUI/Link.js'

import convertPathQueryToString from 'utils/convertPathQueryToString'

export default function CountryInfo(props) {
  const { country } = props

  const router = useRouter()

  const { query } = router

  const path = `/country/${country.id}`

  const href = convertPathQueryToString(path, query)

  return (
    <div style={{ display: 'inline-block', margin: 4 }}>
      <Button variant="outlined" color="primary" component={Link} naked href={href}>
        {country.name}
      </Button>
    </div>
  )
}
