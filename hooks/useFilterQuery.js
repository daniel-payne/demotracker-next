import { useState } from 'react'

import { useRouter } from 'next/router'

import useSWR from 'swr'

const useFilterQuery = () => {
  const router = useRouter()

  const { data, error } = useSWR('/api/options/filter')

  const { defaultOption } = data || {}

  const set = (newValue) => {
    if (value === newValue) {
      return
    }

    const { query = {}, pathname } = router

    query.filter = newValue

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

  const initial = router.query.FILTER || router.query.filter || defaultOption || ''

  const [value, setValue] = useState(initial)

  return [value, set]
}

export default useFilterQuery
