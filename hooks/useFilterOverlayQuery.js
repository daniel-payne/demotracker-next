import useQuery from 'hooks/useQuery'

const useFilterOverlayQuery = () => {
  const router = useQuery()

  const [{ filter: value }, updateQuery] = useQuery()

  const set = (newValue) => updateQuery('filter', newValue)

  return [value, set]
}

export default useFilterOverlayQuery
