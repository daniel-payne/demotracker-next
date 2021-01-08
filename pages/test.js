import { useState } from 'react'

import Link from 'next/link'

import { useRouter } from 'next/router'

import Button from '@material-ui/core/Button'

export default function HomePage() {
  const router = useRouter()

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
        Wikepida 2020
      </Button>
      <Button size="small" color="primary" onClick={() => updateQuery('events', 'GTD')}>
        Global 2020
      </Button>
      <Button size="small" color="primary" onClick={() => updateQuery('people', 'NOPO')}>
        Peopel 2020
      </Button>

      <pre>{JSON.stringify(router, null, 2)}</pre>
    </div>
  )
}
