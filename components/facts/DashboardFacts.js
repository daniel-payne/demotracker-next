import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import TrackingCard from 'components/cards/TrackingCard'
import GlobalEvents from 'components/events/GlobalEvents'
import GlobalLocations from 'components/locations/GlobalLocations'

import { makeStyles } from '@material-ui/core/styles'

export default function DashboardData(props) {
  const { DashboardFacts, full_height, half_guttered, full_guttered } = useStyles()

  return (
    <div className={DashboardFacts}>
      <Grid container className={full_height}>
        <Grid item xs={7} className={full_height}>
          <Paper className={half_guttered}>
            <TrackingCard />
          </Paper>
          <Paper className={half_guttered}>
            <GlobalLocations />
          </Paper>
        </Grid>
        <Grid item xs={5} className={full_height}>
          <Paper className={full_guttered}>
            <GlobalEvents />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  DashboardFacts: {
    height: 'calc(100% - 16px)',
    padding: 8,
    backgroundColor: '#f0f0f0',
  },
  full_height: {
    height: '100%',
  },
  half_guttered: {
    height: 'calc(50% - 4px)',
    margin: 8,
    overflow: 'auto',
  },
  full_guttered: {
    height: '100%',
    margin: 8,
    overflow: 'auto',
  },
}))
