import Head from 'next/head'

import Nav from '../src/components/Nav'
import VideoList from '../src/components/VideoList'

export default function Video() {
  return (
    <div>
      <Head>
        <title>Video</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main> 
        <Nav />
        <VideoList />
      </main>
  
      
    </div>
  )
}