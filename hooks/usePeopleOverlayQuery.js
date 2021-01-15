import useQuery from 'hooks/useQuery'

const usePeopleOverlayQuery = () => {
  const router = useQuery()

  const [{ people: value }, updateQuery] = useQuery()

  const set = (newValue) => updateQuery('people', newValue)

  return [value, set]
}

export default usePeopleOverlayQuery
