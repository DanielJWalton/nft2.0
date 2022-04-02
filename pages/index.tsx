import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { sanityClient, urlFor } from '../sanity'
import { Collection } from '../typings'

import Footer from '../components/Footer'
import Button from '../components/Button'

import bayc from '../public/bayc.png'
import mayc from '../public/mayc.png'
import punk from '../public/punk.png'
import doodle from '../public/doodle.png'
import azuki from '../public/azuki.png'
import something from '../public/something.png'

interface Props {
  collections: Collection[]
}

const Home = ({ collections }: Props) => {
  return (
    <>
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-black">
        <div className="to-blue-400[0.25] bg-gradient-to-tr from-purple-400/[0.15]">
          <main className="mx-auto flex max-w-7xl flex-col p-12 md:min-h-screen">
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
                <button>
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
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    }
                    text={'Light'}
                  />
                </button>
              </div>
            </header>
            {/* TESTING */}
            <div className="grid flex-grow items-center gap-0 pb-48 md:grid-cols-2 md:gap-24 md:pt-24">
              <div className="col-span-1 mt-10 flex flex-col space-y-6 rounded-xl text-center md:text-left  lg:justify-center lg:space-y-2">
                {/* HERO COPY */}
                <h1 className="font-poppins text-3xl font-extralight text-white md:max-w-md md:text-6xl">
                  The <span className="font-bold text-purple-500">best</span>{' '}
                  all in one place
                </h1>
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
              </div>
            </div>
            {/* TESTING */}
            <div className="pt-12 pb-24 md:grid md:grid-cols-4">
              <div className="md:col-span-3 md:col-start-2">
                <section className="pb-8 lg:pb-16">
                  <h1 className="font-poppins text-3xl font-extralight text-white  md:text-4xl">
                    Let's{' '}
                    <span className="font-bold text-purple-500">explore</span>{' '}
                    the collections:
                  </h1>
                </section>
                <div className="flexflex-col items-stretch justify-center  space-y-8 md:space-y-24">
                  <div className="grid gap-6 sm:grid-cols-2 md:gap-8">
                    {collections.map((collection, idx) => (
                      <Link key={idx} href={`/nft/${collection.slug.current}`}>
                        <div className="group relative cursor-pointer">
                          <div className="animate-tilt group-hover:duration-600 absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 opacity-30 blur transition duration-1000 group-hover:opacity-80"></div>

                          <div className="relative flex items-center justify-between space-x-4 divide-gray-600 rounded-xl bg-black px-2 leading-none  text-blue-200 transition duration-200 hover:text-purple-300 sm:p-3">
                            <div className="duration-600 w-full origin-top-left rounded-2xl p-3 sm:w-auto md:w-full">
                              <div className="flex items-center gap-3 sm:flex-col md:flex-row md:gap-6">
                                <div className=" rounded-xl bg-gradient-to-bl from-pink-600/25 to-blue-400/25 p-1.5">
                                  <img
                                    className="lg:w-38 h-auto w-24 flex-shrink rounded-lg object-cover sm:w-full md:w-32"
                                    src={urlFor(collection.previewImage).url()}
                                    alt=""
                                  />
                                </div>

                                <div className="text-left lg:py-8">
                                  <h2 className="font-poppins text-2xl font-medium text-amber-300 sm:text-2xl xl:text-3xl">
                                    {collection.title}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `*[_type == "collection"]{
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

  const collections = await sanityClient.fetch(query)
  return {
    props: {
      collections,
    },
  }
}
