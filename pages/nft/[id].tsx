import Background from '../../layouts/Background'
import Header from '../../components/Header'
import HeroCopy from '../../components/HeroCopy'
import HeroImages from '../../components/HeroImages'
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
    <Background>
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col">
        <div className="flex min-h-screen flex-1 flex-col p-12">
          <Header
            address={address}
            connectWithMetamask={connectWithMetamask}
            disconnect={disconnect}
          />
          <div className="grid flex-grow items-center gap-0 md:grid-cols-2 md:gap-24 md:pt-12">
            <div className="col-span-1 mt-10 flex flex-col space-y-6 rounded-xl text-center md:text-left  lg:justify-center lg:space-y-2">
              <HeroCopy />
            </div>
            <div className="col-span-1">
              <div className="grid grid-cols-3 gap-3 md:gap-6">
                <HeroImages />
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
    </Background>
  )
}

export default NFTDropPage
