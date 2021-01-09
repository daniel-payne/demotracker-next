import useQuery from 'hooks/useQuery'

const useShowQuery = () => {
  const router = useQuery()

  const [{ show: value }, updateQuery] = useQuery()

  const set = (newValue) => updateQuery('show', newValue)

  return [value, set]
}

export default useShowQuery
