import Header from '../components/header'
import Comment from '../components/comment';
import Head from 'next/head';

export default function format({children}) {
  return (
    <div>
        <Head>
            <title>Blog</title>
        </Head>
      <Header/>
      <main>{children}</main>
      <Comment/>
    </div>
  )
}
