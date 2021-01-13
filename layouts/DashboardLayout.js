import ApplicationBar from 'layouts/components/bars/ApplicationBar'

import { makeStyles } from '@material-ui/core/styles'

export default function DashboardLayout(props) {
  const { title, back, backUrl, children } = props

  const { DashboardLayout, header, main } = useStyles()

  return (
    <div className={DashboardLayout}>
      <header className={header}>
        <ApplicationBar title={title} />
      </header>
      <main className={main}>{children}</main>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  DashboardLayout: {
    height: '100%',
  },
  header: {
    height: 64,
  },
  main: {
    height: 'calc(100% - 64px)',
    overflow: 'auto',
  },
}))
