import css from 'styled-jsx/css'

import HeaderBar from 'layouts/components/bars/HeaderBar'
import FooterBar from 'layouts/components/bars/FooterBar'

export default function DefaultLayout(props) {
  const { title, back, children } = props

  return (
    <div className="DefaultLayout">
      <header>
        <HeaderBar title={title} back={back} />
      </header>
      <main>{children}</main>
      <footer>
        <FooterBar />
      </footer>
      <style jsx>{style}</style>
    </div>
  )
}

const style = css`
  .DefaultLayout {
    height: 100%;
  }
  header {
    height: 64px;
  }
  main {
    height: calc(100% - 128px);
    overflow: auto;
  }
  footer {
    height: 64px;
  }
`
