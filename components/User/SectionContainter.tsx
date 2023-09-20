import React from 'react'

const SectionContainter = ({ title, children, containerClass }: any) => {
  return (
    <div className={`flex flex-col justify-start items-center bg-white rounded-md shadow-sm ${ containerClass }`}>
        <h3 className="font-semibold text-xs text-black p-2">{ title }</h3>
        <div className="border border-b-1 border-gray-100 w-full"></div>
        <div className="px-4 w-full flex justify-center">
            { children }
        </div>
    </div>
  )
}

export default SectionContainter
