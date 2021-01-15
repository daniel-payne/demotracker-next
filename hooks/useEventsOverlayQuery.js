import useQuery from 'hooks/useQuery'

const useEventsOverlayQuery = () => {
  const router = useQuery()

  const [{ events: value }, updateQuery] = useQuery()

  const set = (newValue) => updateQuery('events', newValue)

  return [value, set]
}

export default useEventsOverlayQuery
