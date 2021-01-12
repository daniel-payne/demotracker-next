import { useRouter } from 'next/router'

const usePath = () => {
  const router = useRouter()
  const { pathname } = router
  const value = pathname

  const set = (value) => {
    const { query } = router

    pathname = value

    router.push(
      {
        pathname,
        query,
      },
      undefined,
      { shallow: false }
    )
  }

  return [value, set]
}

export default usePath
