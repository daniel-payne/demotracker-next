import { useState } from 'react'

import { useRouter } from 'next/router'

import useSWR from 'swr'

const useEventsQuery = () => {
  const router = useRouter()
  debugger
  const { data, error } = useSWR('/api/options/people')

  const { defaultOption } = data || {}

  const set = (newValue) => {
    if (value === newValue) {
      return
    }

    const { query = {}, pathname } = router

    query.people = newValue

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

  const initial = router.query.PEOPLE || router.query.people || defaultOption || ''

  const [value, setValue] = useState(initial)

  return [value, set]
}

export default useEventsQuery
