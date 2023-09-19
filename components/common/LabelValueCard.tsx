import React from 'react'

const LabelValueCard = ({ label, value, containerClass }: any) => {
  return (
    <div className={ `flex gap-1 justify-start items-center p-2 ${  containerClass }` }>
        <h5 className="font-semibold text-[12px] text-blue-900 leading-3">{ `${ label } : ` }</h5>
        <h6 className="text-[12px] text-black font-light leading-3">{ value }</h6>
    </div>
  )
}

export default LabelValueCard
