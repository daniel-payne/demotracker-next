import { useRouter } from 'next/router'

import Button from '@material-ui/core/Button'

import AnnouncementIcon from '@material-ui/icons/Announcement'
import PeopleIcon from '@material-ui/icons/People'

import { makeStyles } from '@material-ui/core/styles'

import Link from 'materialUI/Link.js'

import convertPathQueryToString from 'utils/convertPathQueryToString'

export default function PersonInformation(props) {
  const { person } = props

  const { incidentCount } = person

  const { PersonInformation, seperator, padded } = useStyles()

  const router = useRouter()

  const { query } = router

  const path = `/person/${person.id}`

  const href = convertPathQueryToString(path, query)

  return (
    <div className={PersonInformation}>
      <Button variant="outlined" color="primary" component={Link} naked href={href}>
        <span>{person.name}</span>
        {/* {peopleCount > 0 && <span className={seperator} />}
        {peopleCount > 0 && <PeopleIcon fontSize="small" color="secondary" />}
        {peopleCount > 0 && <span className={padded}>{peopleCount}</span>}
        {incidentCount > 0 && <span className={seperator} />}
        {incidentCount > 0 && <AnnouncementIcon />}
        {incidentCount > 0 && <span className={padded}>{incidentCount}</span>} */}
      </Button>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  PersonInformation: {
    display: 'inline-block',
    margin: 4,
  },
  seperator: {
    width: 24,
  },
  padded: { paddingLeft: 4 },
}))
