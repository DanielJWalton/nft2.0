import Link from 'next/link'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import { sanityClient, urlFor } from '../../sanity'
import { Collection } from '../../typings'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

import Container from '../../layouts/Container'
import Button from '../../components/Button'
import Footer from '../../components/Footer'

interface Props {
  collection: Collection
}

function NFTDropPage({ collection }: Props) {
  // Auth
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()
  //
  return (
    <Container>
      {/*<div className="min-h-screen bg-black">
  <div className="to-blue-400[0.25] bg-gradient-to-tr from-purple-400/[0.15]">*/}

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col">
        <div className="flex min-h-screen flex-1 flex-col p-8">
          {/* HEADER */}
          <header className="flex flex-col items-center justify-between border-b border-pink-400/[0.15] pb-8 md:flex-row md:pb-10">
            <div>
              <Link href="/">
                <h1 className="text-md cursor-pointer font-poppins font-extralight uppercase tracking-wider text-purple-300/50 md:text-xl">
                  The{' '}
                  <span className="font-medium text-purple-400">Greatest</span>{' '}
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
                onClick={() => (address ? disconnect() : connectWithMetamask())}
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
          <div className="mt-8 flex flex-grow items-center justify-center md:mt-0 md:pt-12">
            <section className="grid w-full grid-cols-2 items-center gap-0 rounded-xl bg-gradient-to-tr from-purple-800/[0.15] to-blue-900/[0.1] p-6 md:grid-cols-4 md:gap-8 lg:grid-cols-5 lg:items-stretch lg:gap-12">
              <div className="col-span-2">
                <div className="my-auto rounded-xl bg-gradient-to-bl from-pink-600/[0.1] to-blue-400/[0.1] p-1.5 md:p-3">
                  {/* HERO IMAGES */}
                  <Image
                    src={urlFor(collection.mainImage).url()}
                    width={400}
                    height={400}
                    layout="responsive"
                    alt="bayc"
                    className="rounded-lg pt-2"
                  />
                </div>
              </div>
              <div className="col-span-2 flex flex-col justify-center md:col-span-2 lg:col-span-3">
                {/* HERO COPY */}
                <div className="flex flex-grow flex-col justify-center px-1 pt-8 md:px-0 md:pt-0">
                  <h1 className="font-poppins text-4xl font-medium text-white lg:text-6xl">
                    {collection.title}
                  </h1>
                  <p className="text-md mb-4 pt-1 font-poppins font-extralight uppercase tracking-wider text-amber-400 lg:text-lg">
                    <span className="font-poppins font-semibold">THE</span>{' '}
                    {collection.description}
                  </p>
                  <p className="mb-6 font-poppins text-white/75 md:max-w-lg lg:mb-0">
                    Discover, collect, and sell extraordinary NFTs and become an
                    owner today. Connect your wallet to get started.
                  </p>
                </div>
                <div className="space-between flex w-full flex-col items-center gap-2 md:gap-6 lg:flex-row lg:pb-2">
                  <div className="group relative w-full cursor-pointer">
                    <div className="animate-tilt group-hover:duration-600 absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 opacity-30 blur transition duration-1000 group-hover:opacity-100"></div>

                    <div className="relative flex items-center justify-between space-x-4 divide-gray-600 rounded-lg bg-black  px-7 py-4 leading-none text-blue-200 transition duration-200 hover:text-purple-300 lg:justify-start">
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
                      <span className="font-poppins text-lg capitalize tracking-wider text-white transition  duration-200 group-hover:text-purple-300">
                        {`MINT ${collection.nftCollectionName}`}
                      </span>
                    </div>
                  </div>

                  <Link href="/">
                    <div className="group relative w-full cursor-pointer">
                      <div className="animate-tilt group-hover:duration-600 absolute -inset-0.5 rounded-lg bg-gradient-to-r from-amber-600 to-pink-500 opacity-30 blur transition duration-1000 group-hover:opacity-100"></div>

                      <div className="relative flex items-center justify-between space-x-4 divide-gray-600 rounded-lg bg-black  px-7 py-4 leading-none text-blue-200 transition duration-200 hover:text-purple-300 lg:justify-start">
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
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                          />
                        </svg>
                        <span className="font-poppins text-lg capitalize tracking-wider text-white transition  duration-200 group-hover:text-purple-300">
                          Go Back
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* MINT */}
          <section></section>
        </div>
      </div>
      <Footer />

      {/*</div>
                  </div>*/}
    </Container>
  )
}

export default NFTDropPage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const query = `*[_type == "collection" && slug.current == $id][0]{
        _id,
        title,
        address,
        description,
        nftCollectionName,
        mainImage {
        asset
      },
      previewImage {
        asset
      },
      slug {
        current
      },
      creator-> {
        _id,
        name,
        address,
        slug {
        current
      },
    },
  }`

  const collection = await sanityClient.fetch(query, {
    id: params?.id,
  })

  if (!collection) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      collection,
    },
  }
}
