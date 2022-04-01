import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Button from '../components/Button'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-black">
        <div className="to-blue-400[0.25] bg-gradient-to-tr from-purple-400/[0.15]">
          <div className="relative flex min-h-screen flex-col items-center justify-center  space-y-8 md:space-y-12">
            <h1 className="font-poppins text-4xl font-extralight text-purple-500 md:text-5xl">
              The <span className="font-bold text-amber-500">greatest</span>{' '}
              NFTs
            </h1>
            <Link href="/nft/greatest">
              <a>
                <Button
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  }
                  text="Enter Site"
                />
              </a>
            </Link>
            <p className="absolute bottom-6 left-6 font-poppins text-xl font-extralight text-purple-300 md:text-3xl">
              <span className="text-pink-400">butters</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
