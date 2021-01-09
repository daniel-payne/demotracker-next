import Link from 'next/link'

import Button from '@material-ui/core/Button'

const testLinks = [
  { text: 'World', href: '/world ' },
  { text: 'World GLTD-1970 MAP', href: '/world?events=GLTD-1970&show=MAP' },
]

export default function HomePage() {
  return (
    <div>
      {testLinks.map((link) => {
        return (
          <div style={{ padding: 4, margin: 8, display: 'inline-block' }}>
            <Link href={link.href}>
              <Button variant="contained" color="primary">
                {link.text}
              </Button>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
