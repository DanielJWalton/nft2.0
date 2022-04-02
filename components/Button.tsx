interface Props {
  icon: JSX.Element
  text: String
}

const Button = ({ icon, text }: Props) => {
  return (
    <div className="group relative">
      <div className="animate-tilt group-hover:duration-600 absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 opacity-30 blur transition duration-1000 group-hover:opacity-100"></div>

      <div className="relative flex items-center space-x-4 divide-gray-600 rounded-lg  bg-black px-7 py-4 leading-none text-blue-200 transition duration-200 hover:text-purple-300">
        {icon}
        <span className="font-poppins text-lg capitalize tracking-wider text-white transition  duration-200 group-hover:text-purple-300">
          {text}
        </span>
      </div>
    </div>
  )
}

export default Button
