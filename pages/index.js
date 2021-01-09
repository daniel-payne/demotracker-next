import Link from 'next/link'

import { useRouter } from 'next/router'

import Button from '@material-ui/core/Button'

export default function HomePage() {
  const router = useRouter()

  return (
    <div>
      <Link href="/world?events=WITR-2000&show=MAP">
        <Button size="small" color="primary">
          WORLD WITR-2000 MAP
        </Button>
      </Link>
      <Link href="/country/1?events=WITR-2000&show=MAP">
        <Button size="small" color="primary">
          COUNTRY 1 WITR-2000 MAP
        </Button>
      </Link>

      <pre>{JSON.stringify(router, null, 2)}</pre>
    </div>
  )
}
