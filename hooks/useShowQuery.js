import { useState } from 'react'

import { useRouter } from 'next/router'

const useShowQuery = () => {
  const router = useRouter()

  const set = (newValue) => {
    const { query = {}, pathname } = router

    query.show = newValue

    router.push(
      {
        pathname,
        query,
      },
      undefined,
      { shallow: true }
    )

    setValue(newValue)
  }

  const initial = router.query.SHOW || router.query.show || ''

  const [value, setValue] = useState(initial)

  return [value, set]
}

export default useShowQuery
