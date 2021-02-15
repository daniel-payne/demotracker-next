import useSWR from 'swr'

import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

import GlobalInformation from 'components/informations/GlobalInformation'
import CountryInformation from 'components/informations/CountryInformation'
import StateInformation from 'components/informations/StateInformation'

import { makeStyles } from '@material-ui/core/styles'

export default function OptionsList(props) {
  const { selected, source, onSelect } = props

  const { PlacesList, padded, space_above } = useStyles()

  const { data, error } = useSWR('/api/places')

  const { world = {}, countries = [], states = [], cities = [], message } = data ? data : {}

  const { incidentCount } = world

  const hsaCountries = countries.length > 0
  const hsaStates = states.length > 0

  return (
    <div className={PlacesList}>
      <GlobalInformation incidentCount={incidentCount} />
      {message && <div>{message}</div>}
      {hsaCountries && (
        <div className={space_above}>
          <Divider />
          <div className={padded}>
            <Typography variant="caption" color="textSecondary">
              Countries
            </Typography>
          </div>
        </div>
      )}
      {countries.map((country) => (
        <CountryInformation key={country.id} country={country} />
      ))}
      {hsaStates && (
        <div className={space_above}>
          <Divider />
          <div className={padded}>
            <Typography variant="caption" color="textSecondary">
              States
            </Typography>
          </div>
        </div>
      )}
      {states.map((state) => (
        <StateInformation key={state.id} state={state} />
      ))}
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  PlacesList: {
    display: 'inline-block',
    margin: 4,
  },
  padded: { paddingLeft: 4, paddingTop: 8, paddingBottom: 0 },
  space_above: {
    marginTop: 8,
    marginBottom: 0,
  },
}))
