import React from 'react'

const SelectField = ({label, value}) => {
  return (
	<div className='flex justify-end gap-5 items-center w-full mb-2 pointer-events-none select-none'>
		<span className='ml-3 text-[14px] text-[500]'>{label} </span>
			<select

			  type='select'
			  className='outline-none px-3 py-1.5 w-[65%] rounded-[4px]  bg-[#E4E7EB] border-[#E4E7EB] text-[15px] font-bold opacity-85 pr-2' >
			  <option>{value}</option>
			</select>
	</div>
  )
}

export default SelectField