import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-opacity-05 to-blue-400[0.25] relative flex min-h-screen flex-col items-center justify-center  space-y-8 bg-gradient-to-tr from-purple-400/[0.15] md:space-y-12">
        <h1 className="font-poppins text-4xl font-extralight text-purple-500 md:text-5xl">
          The <span className="font-bold text-amber-500">greatest</span> NFTs
        </h1>
        <div className="group relative">
          <div className="animate-tilt group-hover:duration-600 absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 opacity-30 blur transition duration-1000 group-hover:opacity-100"></div>
          <Link href="/nft/greatest">
            <a className="relative flex items-center space-x-4 divide-gray-600 rounded-lg  px-7 py-4 leading-none text-blue-200 transition duration-200 hover:text-purple-300 bg-black">
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

              <span className="font-poppins text-lg tracking-wider text-white transition duration-200  group-hover:text-purple-300">
                Enter Site
              </span>
            </a>
          </Link>
        </div>
        <p className="absolute bottom-6 left-6 font-poppins text-xl font-extralight text-purple-300 md:text-3xl">
          <span className="text-pink-400">butters</span>
        </p>
      </div>
    </div>
  )
}

export default Home
