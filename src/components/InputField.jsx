import React from 'react'

const InputField = ({label, value}) => {
  return (
	<div className='flex justify-end gap-5 items-center w-full mb-2 pointer-events-none select-none'>
		<span className='ml-3 text-[14px] text-[500] text-right'>{label} </span>
		  <input
		  	value={value} 
			className='outline-none px-3 py-1.5 w-[65%] rounded-[4px] border-[1px]	 border-[#c5c5c580] text-[15px] font-bold opacity-85' />
	</div>
  )
}

export default InputField