import Head from 'next/head'

import DashboardLayout from 'layouts/DashboardLayout'
import DashboardFacts from 'components/facts/DashboardFacts'

import { makeStyles } from '@material-ui/core/styles'

export default function IndexPage() {
  const { IndexPage } = useStyles()

  return (
    <div className={IndexPage}>
      <Head>
        <title>Worldview </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout title="Worldview Dashboard">
        <DashboardFacts />
      </DashboardLayout>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  IndexPage: {
    height: '100%',
  },
}))
