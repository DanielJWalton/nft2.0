import { useState, useEffect } from 'react'
import { useAddress, useNFTDrop } from '@thirdweb-dev/react'

import Link from 'next/link'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import { sanityClient, urlFor } from '../../sanity'
import { Collection } from '../../typings'

import { BigNumber } from 'ethers'
import toast, { Toaster } from 'react-hot-toast'

import Container from '../../layouts/Container'

interface Props {
  collection: Collection
}

function NFTDropPage({ collection }: Props) {
  // state
  const [claimedSupply, setClaimedSupply] = useState<number>(0)
  const [totalSupply, setTotalSupply] = useState<BigNumber>()
  const [priceInEth, setPriceInEth] = useState<string>()
  const [loading, setLoading] = useState<boolean>(true)
  const nftDrop = useNFTDrop(collection.address)

  const address = useAddress()

  useEffect(() => {
    if (!nftDrop) return

    const fetchPrice = async () => {
      const claimConditions = await nftDrop.claimConditions.getAll()

      setPriceInEth(claimConditions?.[0].currencyMetadata.displayValue)
    }

    fetchPrice()
  }, [nftDrop])

  useEffect(() => {
    if (!nftDrop) return

    const fetchNFTDropData = async () => {
      setLoading(true)

      const claimed = await nftDrop.getAllClaimed()
      const total = await nftDrop.totalSupply()

      setClaimedSupply(claimed.length)
      setTotalSupply(total)

      setLoading(false)
    }

    fetchNFTDropData()
  }, [nftDrop])

  const mintNft = () => {
    if (!nftDrop || !address) return

    const quantity = 1

    setLoading(true)
    const notification = toast.loading('Minting...', {
      style: {
        background: 'white',
        color: 'green',
        fontWeight: 'bolder',
        fontSize: '17px',
        padding: '20px',
      },
    })

    nftDrop
      .claimTo(address, quantity)
      .then(async (tx) => {
        const receipt = tx[0].receipt // tx receipt
        const claimedTokenId = tx[0].id // the ID of the NFT claimed
        const claimedNFT = await tx[0].data() // (optional) get the claimed metadata - attributes etc.

        toast('Successfully Minted!', {
          duration: 8000,
          style: {
            background: 'green',
            color: 'white',
            fontWeight: 'bolder',
            fontSize: '17px',
            padding: '20px',
          },
        })

        console.log(receipt)
        console.log(claimedTokenId)
        console.log(claimedNFT)
      })
      .catch((err) => {
        console.log(err)

        toast('Whoops...Something Went Wrong.', {
          style: {
            background: 'red',
            color: 'white',
            fontWeight: 'bolder',
            fontSize: '17px',
            padding: '20px',
          },
        })
      })
      .finally(() => {
        setLoading(false)
        toast.dismiss(notification)
      })
  }

  return (
    <Container>
      {/* MAIN */}
      <div className="mt-8 flex flex-grow items-center justify-center md:mt-0 md:pt-12">
        <Toaster position="bottom-center" />
        <section className="grid w-full grid-cols-2 items-center gap-0 rounded-xl bg-gradient-to-tr from-purple-400/[0.10] to-blue-400/[0.05] p-6 dark:from-purple-800/[0.10] dark:to-blue-800/[0.05] md:grid-cols-4 md:gap-8 lg:grid-cols-5 lg:items-stretch lg:gap-12">
          <div className="col-span-2">
            <div className="my-auto rounded-xl bg-gradient-to-bl from-pink-600/[0.3] to-blue-400/[0.3] p-1.5 transition duration-500 ease-in-out hover:rotate-1  dark:from-pink-600/[0.1] dark:to-blue-400/[0.1] md:p-3">
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
            <div className="flex flex-grow flex-col items-start justify-center px-1 pt-8 md:px-0 md:pt-0">
              <h1 className="font-poppins text-4xl font-medium dark:text-white lg:text-6xl">
                {collection.title}
              </h1>
              <p className="text-md mb-4 pt-1 font-poppins font-extralight uppercase tracking-wider text-amber-600 dark:text-amber-400 lg:text-lg">
                <span className="font-poppins font-semibold">THE</span>{' '}
                {collection.description}
              </p>
              <p className="mb-3 font-poppins text-black/75 dark:text-white/75 md:max-w-lg lg:mb-4">
                Discover, collect, and sell extraordinary NFTs and become an
                owner today. Connect your wallet to get started.
              </p>
              {loading ? (
                <p className="mb-6 mt-2 inline-block w-auto animate-pulse rounded-md bg-white p-3 font-poppins text-lg font-medium uppercase text-green-500 shadow-lg dark:bg-black md:mb-0">
                  Loading supply count ...
                </p>
              ) : (
                <p className="mb-6 mt-2 inline-block w-auto rounded-md bg-white p-3 font-poppins text-lg font-medium uppercase text-green-500 shadow-lg dark:bg-black md:mb-0">
                  {claimedSupply} / {totalSupply?.toString()} NFT's claimed
                </p>
              )}
            </div>
            <div className="space-between flex w-full flex-col items-center gap-4 md:gap-6 lg:flex-row lg:pb-2">
              <div className="group relative w-full cursor-pointer">
                {loading ? (
                  <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 opacity-30 blur transition duration-1000"></div>
                ) : claimedSupply === totalSupply?.toNumber() ? (
                  <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 opacity-30 blur transition duration-1000"></div>
                ) : !address ? (
                  <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 opacity-30 blur transition duration-1000"></div>
                ) : (
                  <div className="animate-tilt group-hover:duration-600 absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 opacity-30 blur transition duration-1000 group-hover:opacity-100"></div>
                )}

                <button
                  disabled={
                    loading ||
                    claimedSupply === totalSupply?.toNumber() ||
                    !address
                  }
                  onClick={mintNft}
                  className="relative flex w-full cursor-pointer items-center justify-between space-x-4 divide-gray-600 rounded-lg bg-white px-7 py-4  leading-none text-black transition duration-200 hover:text-purple-500 disabled:cursor-not-allowed disabled:bg-gray-700/50 disabled:hover:text-black dark:bg-black dark:text-white dark:hover:text-purple-300 dark:disabled:bg-gray-300/50 disabled:dark:hover:text-white lg:justify-start"
                >
                  {loading ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  ) : claimedSupply === totalSupply?.toNumber() ? (
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
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      />
                    </svg>
                  ) : !address ? (
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
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      />
                    </svg>
                  ) : (
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
                  )}

                  <span className="font-poppins text-lg capitalize tracking-wider  transition  duration-200  ">
                    {/* {`MINT ${collection.nftCollectionName}`} */}

                    {loading ? (
                      <>Loading...</>
                    ) : claimedSupply === totalSupply?.toNumber() ? (
                      <>Sold Out</>
                    ) : !address ? (
                      <>Sign in to Mint</>
                    ) : (
                      <>Mint ({priceInEth} ETH)</>
                    )}
                  </span>
                </button>
              </div>

              <Link href="/">
                <div className="group relative w-full cursor-pointer">
                  <div className="animate-tilt group-hover:duration-600 absolute -inset-0.5 rounded-lg bg-gradient-to-r from-amber-600 to-pink-500 opacity-30 blur transition duration-1000 group-hover:opacity-100"></div>

                  <div className="text-blacktransition relative flex items-center justify-between space-x-4 divide-gray-600 rounded-lg bg-white  px-7 py-4 leading-none duration-200 hover:text-purple-500 dark:bg-black dark:text-white dark:hover:text-purple-300 lg:justify-start">
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
                    <span className="font-poppins text-lg capitalize tracking-wider text-black transition duration-200 group-hover:text-purple-500 dark:text-white dark:group-hover:text-purple-300">
                      Go Back
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
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
