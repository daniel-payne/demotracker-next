import useQuery from 'hooks/useQuery'

const useFilterQuery = () => {
  const router = useQuery()

  const [{ filter: value }, updateQuery] = useQuery()

  const set = (newValue) => updateQuery('filter', newValue)

  return [value, set]
}

export default useFilterQuery
