import { useRouter } from 'next/router'

import Button from '@material-ui/core/Button'

import AnnouncementIcon from '@material-ui/icons/Announcement'

import { makeStyles } from '@material-ui/core/styles'

import Link from 'materialUI/Link.js'

import convertPathQueryToString from 'utils/convertPathQueryToString'

export default function GlobalInformation(props) {
  const { incidentCount } = props

  const { GlobalInformation, seperator, padded } = useStyles()

  const router = useRouter()

  const { query } = router

  const path = `/world`

  const href = convertPathQueryToString(path, query)

  return (
    <div className={GlobalInformation}>
      <Button variant="contained" color="primary" disableElevation component={Link} naked href={href}>
        <span>World</span>
        {incidentCount > 0 && <span className={seperator} />}
        {incidentCount > 0 && <AnnouncementIcon />}
        {incidentCount > 0 && <span className={padded}>{incidentCount}</span>}
      </Button>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  GlobalInformation: {
    display: 'inline-block',
    margin: 4,
  },
  seperator: {
    width: 24,
  },
  padded: { paddingLeft: 4 },
}))
