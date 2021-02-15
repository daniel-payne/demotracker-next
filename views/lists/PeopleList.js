import useSWR from 'swr'

import Divider from '@material-ui/core/Divider'

import PersonInformation from 'components/informations/PersonInformation'

export default function OptionsList(props) {
  const { selected, source, onSelect } = props

  const { data, error } = useSWR('/api/people')

  const { people = [], message } = data ? data : {}

  return (
    <div>
      {message && <div>{message}</div>}
      {people.map((person) => (
        <PersonInformation key={person.id} person={person} />
      ))}
    </div>
  )
}
