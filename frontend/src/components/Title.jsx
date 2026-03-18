import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-10">

      <span className="w-12 h-[2px] bg-gray-300"></span>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-400 tracking-wide">
        {text1}{" "}
        <span className="text-black">
          {text2}
        </span>
      </h2>

      <span className="w-12 h-[2px] bg-gray-800"></span>

    </div>
  )
}

export default Title