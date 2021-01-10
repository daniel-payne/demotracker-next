import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import css from 'styled-jsx/css'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from 'materialUI/theme.js'

import 'css/projection.css'

export default function App(props) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      <style jsx>{global}</style>
    </React.Fragment>
  )
}

const global = css.global`
  html,
  body,
  body > div:first-child,
  div#__next {
    height: 100%;
  }
  body {
    margin: 0;
  }
  .App {
    height: 100%;
  }
`

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
