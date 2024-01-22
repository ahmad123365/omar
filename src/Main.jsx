import React from 'react'
import { Input } from 'antd';



const Main = () => {
  return (
	  <div className='min-h-[100vh] w-full'>
		<div className='w-[92%] mx-auto max-w-[500px] mt-4 lg:mt-12 py-5 shadow-xl'>
			<div className='bg-[#b9acb0] h-12 px-3 text-xl pt-2'>
				Diploma Sonuc
			</div>
			<div className='bg-[#c0b5b9] px-2'>
				<p className='bg-green-500 mt-3 mb-2 mx-3 w-fit shadow-lg'>NEU-OL-185927 aktivasyon kodlu diploma sisteme kayyitlidir</p>				
				<div className='mx-3 '>
					<div className='bg-[#b9acb0] px-3 text-lg h-12'>orenci Bilgileri</div>
					<div className='bg-[#bfbdbd] shadow-xl flex flex-col items-center py-4 px-2'>
						<div className='flex justify-between items-center w-full mb-2'>
							<span className='ml-3'>Kimlik No: </span>
							<input className='outline-none p-1 w-[65%] shadow-xl border' />
						</div>
						<div className='flex justify-between items-center w-full mb-2'>
							<span className='ml-3'>Orenci No: </span>
							<input className='outline-none p-1 w-[65%] shadow-xl border' />
						</div>
						<div className='flex justify-between items-center w-full mb-2'>
							<span className='ml-3'>Isim: </span>
							<input className='outline-none p-1 w-[65%] shadow-xl border' />
						</div>
						<div className='flex justify-between items-center w-full mb-2'>
							<span className='ml-3'>Soyisim: </span>
							<input className='outline-none p-1 w-[65%] shadow-xl border' />
						</div>
						<div className='flex justify-between items-center w-full mb-2'>
							<span className='ml-3'>Dogum Yeri: </span>
							<input className='outline-none p-1 w-[65%] shadow-xl border' />
						</div>
						<div className='flex justify-between items-center w-full mb-2'>
							<span className='ml-3'>Uyruk: </span>
							<input className='outline-none p-1 w-[65%] shadow-xl border' />
						</div>
						<div className='flex justify-between items-center w-full mb-2'>
							<span className='ml-3'>Dogum: </span>
							<input className='outline-none p-1 w-[65%] shadow-xl border' />
						</div>
					</div>
				</div>
				<div className='px-3 my-4'>
					<div className='bg-[#b9acb0] px-3 text-lg h-12'>orenci Bilgileri</div>
					<div className='bg-[#c0b5b9] shadow-xl flex flex-col items-center py-4 px-2'>
						<div className='flex justify-between items-center w-full mb-2'>
							<span className='ml-3'>Kimlik No: </span>
							<input className='outline-none p-1 w-[65%] shadow-xl border' />
						</div>
						<div className='flex justify-between items-center w-full mb-2'>
							<span className='ml-3'>Orenci No: </span>
							<input className='outline-none p-1 w-[65%] shadow-xl border' />
						</div>
						<div className='flex justify-between items-center w-full mb-2'>
							<span className='ml-3'>Isim: </span>
							<input className='outline-none p-1 w-[65%] shadow-xl border' />
						</div>
						<div className='flex justify-between items-center w-full mb-2'>
							<span className='ml-3'>Soyisim: </span>
							<input className='outline-none p-1 w-[65%] shadow-xl border' />
						</div>
						<div className='flex justify-between items-center w-full mb-2'>
							<span className='ml-3'>Dogum Yeri: </span>
							<input className='outline-none p-1 w-[65%] shadow-xl border' />
						</div>
						<div className='flex justify-between items-center w-full mb-2'>
							<span className='ml-3'>Uyruk: </span>
							<input className='outline-none p-1 w-[65%] shadow-xl border' />
						</div>
						<div className='flex justify-between items-center w-full mb-2'>
							<span className='ml-3'>Dogum: </span>
							<input className='outline-none p-1 w-[65%] shadow-xl border' />
						</div>
					</div>
				</div>
			</div>
		</div>	  
	  </div>
  )
}

export default Main