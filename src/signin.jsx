import React, { useState } from 'react'
import InputField  from './components/InputField';
import SelectField from './components/SelectField';
import { useNavigate } from 'react-router';



const Signin = () => {
	const [value,setValue] = useState("")
	const correct = "NEU-YB-164915"
	const navigate = useNavigate()
	const handleSubmit = () => {
		if (correct === value) navigate("Diploma/NEU-YB-164915")
		else navigate("")
		
	}
  return (
	  <div className='w-full min-h-100vh h-full font-sans'>
		  <div className='w-[97%] mx-auto h-full bg-[#fff] shadow-2xl mt-5 '>
			  <div className='w-full bg-[#f7f7f7] px-6 py-3 text-[16px] text-[#212529] font-[500] leading-[22px]'>Diploma Sorgulama</div>
			  <div className='w-full lg:w-[83%]'>
			  <div className='p-5'>
			  <div className='shadow-lg'>
				<div className='w-full bg-[#f7f7f7] px-6 py-3 text-[14px] text-[#212529] font-[500] leading-[21px]'>Diploma`</div>
				<div className='flex flex-col lg:flex-row py-5 px-5 w-full'>
					<div>
						<img alt='' src='/images/qr-code.png' className='w-[200px] h-[200px] p-2'/>
						<p className='text-center'>XXX-YY-123456</p>
					</div>
					<div>
						<p>Diploma arka yüzünde QR Kod altında görünen aktivasyon kodunu kutuya yazarak sorgulayabilirsiniz.</p>
						<form className='flex flex-col lg:flex-row gap-5 items-center w-full mb-2  select-none ' onSubmit={handleSubmit}>
							<div className='flex gap-3 items-center'>
								<span className='ml-3 text-[14px] text-[500] text-right'>Aktivasyon No : </span>
								<input
									value={value}
									onChange={e=> setValue(e.target.value)} 
									className='active:border-blue-500 focus:border-blue-500  active:border-[2px] focus:border-[2px]  outline-none px-3 py-1.5 w-[200px] h-full rounded-[4px] border-[1px]	 border-[#c5c5c580] text-[15px] font-bold opacity-85' />
								
							</div>
							<button type="submit" className='w-full lg:w-[200px] h-full border-0 outline-none bg-[#00C292] text-white py-2 cursor-pointer transition-colors duration-[400ms] hover:bg-[#328e77] active:shadow active:shadow-green-500/50 '>Sorgula</button>
						</form>
					</div>
				</div>
				
			  </div>
			  <div className='p-4'>
					<p>Please contact with numbers below.</p>
					<p>+ 90 (392) 223 64 64</p>
					<p>+ 90 (392) 680 20 00</p>
					<p>Numaralı telefonlardan ulaşınız.</p>
				</div>
		  </div>
		  </div>
		  </div>
		 
	  </div>
  )
}

export default Signin
