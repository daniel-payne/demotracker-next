import { useRouter } from 'next/router'

const useQuery = () => {
  const router = useRouter()
  const { query } = router
  const value = query

  const set = (target, value) => {
    const { query = {}, pathname } = router

    query[target] = value

    router.push(
      {
        pathname,
        query,
      },
      undefined,
      { shallow: true }
    )
  }

  return [value, set]
}

export default useQuery
