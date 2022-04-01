import Image from 'next/image'
import bayc from '../public/bayc.png'
import mayc from '../public/mayc.png'
import punk from '../public/punk.png'
import doodle from '../public/doodle.png'
import azuki from '../public/azuki.png'
import something from '../public/something.png'

const HeroImages = () => {
  return (
    <>
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
    </>
  )
}

export default HeroImages
