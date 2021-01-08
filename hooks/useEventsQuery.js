import { useState } from 'react'

import { useRouter } from 'next/router'

import useSWR from 'swr'

const useEventsQuery = () => {
  const router = useRouter()

  const { data, error } = useSWR('/api/options/events')

  const { defaultOption } = data || {}

  const set = (newValue) => {
    if (value === newValue) {
      return
    }

    const { query = {}, pathname } = router

    query.events = newValue

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

  const initial = router.query.EVENTS || router.query.events || defaultOption || ''

  const [value, setValue] = useState(initial)

  return [value, set]
}

export default useEventsQuery
