import Link from 'next/link'
import Button from './Button'

const Header = ({ address, disconnect, connectWithMetamask }) => {
  return (
    <header className="flex flex-col items-center justify-between border-b border-pink-400/[0.15] pb-8 md:flex-row md:pb-10">
      <div>
        <Link href="/">
          <h1 className="cursor-pointer font-poppins text-sm font-extralight uppercase tracking-wider text-purple-300/50 md:text-xl">
            The <span className="font-medium text-purple-400">Greatest</span>{' '}
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
  )
}

export default Header
