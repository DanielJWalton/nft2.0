import Link from 'next/link'
import Image from 'next/image'
import bayc from '../../public/bayc.png'
import mayc from '../../public/mayc.png'
import punk from '../../public/punk.png'
import doodle from '../../public/doodle.png'
import azuki from '../../public/azuki.png'
import something from '../../public/something.png'

import Button from '../../components/Button'
import Footer from '../../components/Footer'

import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

function NFTDropPage() {
  // Auth
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()
  //
  return (
    <div className="min-h-screen bg-black">
      <div className="to-blue-400[0.25] bg-gradient-to-tr from-purple-400/[0.15]">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col">
          <div className="flex min-h-screen flex-1 flex-col p-12">
            {/* HEADER */}
            <header className="flex flex-col items-center justify-between border-b border-pink-400/[0.15] pb-8 md:flex-row md:pb-10">
              <div>
                <Link href="/">
                  <h1 className="cursor-pointer font-poppins text-sm font-extralight uppercase tracking-wider text-purple-300/50 md:text-xl">
                    The{' '}
                    <span className="font-medium text-purple-400">
                      Greatest
                    </span>{' '}
                    NFT Market Place
                  </h1>
                </Link>
              </div>
              <div className="mt-6 flex flex-col items-center space-y-4 md:mt-0 md:flex-row  md:space-y-0 md:space-x-5">
                {address && (
                  <p className="text-center text-sm text-amber-300">
                    You're logged in with wallet {address.substring(0, 5)}
                    ...
                    {address.substring(address.length - 5)}
                  </p>
                )}
                <button
                  onClick={() =>
                    address ? disconnect() : connectWithMetamask()
                  }
                >
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
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        />
                      </svg>
                    }
                    text={address ? 'Sign Out' : 'Sign In'}
                  />
                </button>
              </div>
            </header>
            {/* MAIN */}
            <div className="grid flex-grow items-center gap-0 md:grid-cols-2 md:gap-24 md:pt-12">
              <div className="col-span-1 mt-10 flex flex-col space-y-6 rounded-xl text-center md:text-left  lg:justify-center lg:space-y-2">
                {/* HERO COPY */}
                <h1 className="font-poppins text-4xl font-light text-white lg:text-6xl">
                  The <span className="font-bold text-amber-500">Greatest</span>{' '}
                  is coming...
                </h1>
                <p className="text-md p-2  pt-2 font-poppins font-extralight uppercase tracking-wider text-purple-300 lg:text-lg">
                  <span className="font-poppins font-semibold">Join</span> the
                  revolution.
                </p>
              </div>
              <div className="col-span-1">
                <div className="grid grid-cols-3 gap-3 md:gap-6">
                  {/* HERO IMAGES */}
                  <div className="flex flex-col gap-3 pt-24 md:gap-6">
                    <div className="origin-top-left rounded-xl bg-gradient-to-bl from-pink-600/25 to-blue-400/25 p-1.5 transition duration-200 ease-in-out hover:rotate-1 hover:scale-105">
                      <Image
                        src={bayc}
                        width={400}
                        height={400}
                        layout="responsive"
                        alt="bayc"
                        className="rounded-lg pt-2"
                      />
                    </div>
                    <div className="origin-top-left rounded-xl bg-gradient-to-bl from-pink-600/25 to-blue-400/25 p-1.5 transition duration-200 ease-in-out hover:rotate-1 hover:scale-105">
                      <Image
                        src={punk}
                        width={400}
                        height={400}
                        layout="responsive"
                        alt="punk"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 pt-12 md:gap-6">
                    <div className="origin-top-left rounded-xl bg-gradient-to-bl from-pink-600/25 to-blue-400/25 p-1.5 transition duration-200 ease-in-out hover:rotate-1 hover:scale-105">
                      <Image
                        src={mayc}
                        width={400}
                        height={400}
                        layout="responsive"
                        alt="mayc"
                        className="rounded-lg"
                      />
                    </div>
                    <div className="origin-top-left rounded-xl bg-gradient-to-bl from-pink-600/25 to-blue-400/25 p-1.5 transition duration-200 ease-in-out hover:rotate-1 hover:scale-105">
                      <Image
                        src={doodle}
                        width={400}
                        height={400}
                        layout="responsive"
                        alt="doodle"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 md:gap-6">
                    <div className="origin-top-left rounded-xl bg-gradient-to-bl from-pink-600/25 to-blue-400/25 p-1.5 transition duration-200 ease-in-out hover:rotate-1 hover:scale-105">
                      <Image
                        src={azuki}
                        width={400}
                        height={400}
                        layout="responsive"
                        alt="mayc"
                        className="rounded-lg"
                      />
                    </div>
                    <div className="origin-top-left rounded-xl bg-gradient-to-bl from-pink-600/25 to-blue-400/25 p-1.5 transition duration-200 ease-in-out hover:rotate-1 hover:scale-105">
                      <Image
                        src={something}
                        width={400}
                        height={400}
                        layout="responsive"
                        alt="doodle"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <button className="mt-10 grid w-full justify-center">
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    }
                    text="MINT NFT (0.01 ETH)"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default NFTDropPage
