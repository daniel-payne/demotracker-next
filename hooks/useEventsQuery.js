import useQuery from 'hooks/useQuery'

const useEventsQuery = () => {
  const router = useQuery()

  const [{ events: value }, updateQuery] = useQuery()

  const set = (newValue) => updateQuery('events', newValue)

  return [value, set]
}

export default useEventsQuery
