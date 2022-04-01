import Head from 'next/head'

const Background = ({ children }) => {
  return (
    <>
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-black">
        <div className="to-blue-400[0.25] bg-gradient-to-tr from-purple-400/[0.15]">
          {children}
        </div>
      </div>
    </>
  )
}

export default Background
