import { makeStyles } from '@material-ui/core/styles'

export default function CountIndicator(props) {
  const { count, small, primary, Icon } = props

  const { CountIndicator, seperator, smallPadded, padded } = useStyles()

  const fontSize = small ? '' : 'large'
  const color = primary ? 'primary' : 'secondary'

  return (
    <>
      {count && (
        <>
          <Icon className={padded} fontSize={fontSize} color={color} />
          <span className={small ? smallPadded : padded}>{count}</span>
        </>
      )}
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  CountIndicator: {
    display: 'inline-block',
    margin: 4,
  },
  seperator: {
    width: 24,
  },
  smallPadded: { paddingLeft: 4 },
  padded: { paddingLeft: 8 },
}))
