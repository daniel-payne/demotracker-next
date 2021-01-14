import { makeStyles } from '@material-ui/core/styles'

export default function GroupSeparator() {
  const { GroupSeparator } = useStyles()

  return <div className={GroupSeparator}>&nbsp;</div>
}

const useStyles = makeStyles((theme) => ({
  GroupSeparator: { height: 4 },
}))
