import Head from 'next/head'
import { Profiler } from 'react'
import Form from '../src/components/Form'
import Nav from '../src/components/Nav'


export default function Home() {
  return (
    <div >
      <Head>
        <title>spinapp</title>
        <meta name="description" content="Spin charts and videos" />
        <link rel="icon" href="https://coursemarks.com/wp-content/uploads/2020/11/1228782_2f4c.jpg" />
      </Head>

      <main>

        <Nav />
        <Form />

      </main>
    </div>
  )
}
