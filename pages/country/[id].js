import Head from 'next/head'

import DefaultLayout from 'layouts/DefaultLayout'

export async function getStaticProps(context) {
  console.log(context)
  return {
    props: {
      id: context.params.id,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '' } }],
    fallback: true,
  }
}

export default function HomePage(props) {
  const { id } = props

  return (
    <div className="HomePage" style={{ height: '100%' }}>
      <Head>
        <title>Country</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>CountryPage .{id}.</DefaultLayout>
    </div>
  )
}
