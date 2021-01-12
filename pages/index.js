import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import Link from 'materialUI/Link.js'

const testLinks = [
  { text: 'World', href: '/world ' },
  { text: 'World GLTD-1970 MAP', href: '/world?events=GLTD-1970&show=MAP' },
]

export default function IndexPage() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          World View Dashboard
        </Typography>
        <div style={{ padding: 4, marginRight: 8, display: 'inline-block' }}>
          <Link href="/about" color="secondary">
            About
          </Link>
        </div>
        <br />
        {testLinks.map((link, i) => {
          return (
            <div style={{ padding: 4, marginRight: 8, display: 'inline-block' }} key={i}>
              <Button variant="contained" color="primary" component={Link} naked href={link.href}>
                {link.text}
              </Button>
            </div>
          )
        })}
      </Box>
    </Container>
  )
}
