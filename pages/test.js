import Button from '@material-ui/core/Button'

import useQuery from 'hooks/useQuery'

export default function HomePage(props) {
  const [{ events, people, filter, display }, updateQuery] = useQuery()

  return (
    <div>
      <Button size="small" color="primary" onClick={() => updateQuery('events', 'WITE')}>
        Wikepida 2020 {events === 'WITE' ? 'YES' : 'no'}
      </Button>
      <Button size="small" color="primary" onClick={() => updateQuery('events', 'GTD')}>
        Global 2020 {events === 'GTD' ? 'YES' : 'no'}
      </Button>
      <Button size="small" color="primary" onClick={() => updateQuery('people', 'NOPO')}>
        Peopel 2020
      </Button>{' '}
      <Button size="small" color="primary" onClick={() => updateQuery('people', 'ALLP')}>
        Peopel 2020
      </Button>
      <div>{events}</div> <div>{people}</div> <div>{filter}</div> <div>{display}</div>
    </div>
  )
}
