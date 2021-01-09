import { useState } from 'react'

import Link from 'next/link'

import { useRouter } from 'next/router'

import Button from '@material-ui/core/Button'

export default function HomePage(props) {
  const router = useRouter()
  const { query } = router
  const { events, people, filter, display } = query

  const updateQuery = (target, value) => {
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

  return (
    <div>
      <Button size="small" color="primary" onClick={() => updateQuery('events', 'WITE')}>
        Wikepida 2020 {events === 'WITE' ? 'YES' : 'no'}
      </Button>
      <Button size="small" color="primary" onClick={() => updateQuery('events', 'GTD')}>
        Global 2020 {events === 'GTD' ? 'YES' : 'no'}
      </Button>
      <Button size="small" color="primary" onClick={() => updateQuery('people', 'NOPO')}>
        Peopel 2020
      </Button>{' '}
      <Button size="small" color="primary" onClick={() => updateQuery('people', 'ALLP')}>
        Peopel 2020
      </Button>
      <div>{events}</div> <div>{people}</div> <div>{filter}</div> <div>{display}</div>
    </div>
  )
}
