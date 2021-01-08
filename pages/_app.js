import css from 'styled-jsx/css'

import CssBaseline from '@material-ui/core/CssBaseline'

import 'css/projection.css'

function App({ Component, pageProps }) {
  return (
    <div className="App">
      <CssBaseline />
      <Component {...pageProps} />
      <style jsx>{global}</style>
    </div>
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

export default App
