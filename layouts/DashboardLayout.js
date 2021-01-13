import css from 'styled-jsx/css'

import ApplicationBar from 'layouts/components/bars/ApplicationBar'
import FooterBar from 'layouts/components/bars/FooterBar'

export default function DashboardLayout(props) {
  const { title, back, backUrl, children } = props

  return (
    <div className="DashboardLayout">
      <header>
        <ApplicationBar title={title} />
      </header>
      <main>{children}</main>
      <style jsx>{style}</style>
    </div>
  )
}

const style = css`
  .DashboardLayout {
    height: 100%;
  }
  header {
    height: 64px;
  }
  main {
    height: calc(100% - 64px);
    overflow: auto;
  }
  footer {
    height: 64px;
  }
`
