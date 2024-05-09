import React from 'react'
import InputField  from './components/InputField';
import SelectField from './components/SelectField';



const Main = () => {
  return (
	  <div className='w-full min-h-100vh h-full font-sans'>
		  <div className='w-[97%] mx-auto  bg-[#fff] shadow-2xl mt-5 '>
			  <div className='w-full bg-[#f7f7f7] px-6 py-3 text-[16px] text-[#212529] font-[500] leading-[22px]'>Diploma Sonuç</div>
			  <div className='w-full lg:w-[83%]'>
			  <div className='p-5'>
			  <p className='bg-[#7fff00] font-[400] text-[1.1rem] mb-2'>NEU-OI-185927 aktivasyon kodlu diploma sisteme kayıtlıdır.</p>
			  <div className='shadow-lg'>
				<div className='w-full bg-[#f7f7f7] px-6 py-3 text-[14px] text-[#212529] font-[500] leading-[21px]'>Öğrenci Bilgileri</div>
				<div className='flex flex-col lg:flex-row py-5 px-10 w-full'>
					<div id='div1' className='flex flex-col gap-[1px] flex-1' >
						<InputField label='Kimlik No :' value={"003-22-L044025"}/>
						<InputField label='İsim :' value={"Younes"}/>
						<InputField label='Doğum Yeri :' value={"K-S-A"}/>
						<InputField label='Doğum Tarihi :' value={"15.06.2000"}/>
					</div>
					<div id='div2' className='flex flex-col gap-[1px] flex-1'>
						<InputField label='Öğrenci No :' value={"20183711"}/>
						<InputField label='Soyisim :' value={"Bahboh"}/>
						<SelectField label='Uyruk :' value={"Suriye"}/>
					</div>
				</div>
			  </div>
			  <div className='shadow-lg mt-6'>
				<div className='w-full bg-[#f7f7f7] px-6 py-3 text-[14px] text-[#212529] font-[500] leading-[21px]'>Okul Bilgileri</div>
				<div className='flex flex-col lg:flex-row py-5 px-10 w-full'>
					<div id='div1' className='flex flex-col gap-[1px] flex-1' >
						<SelectField label='Derecesi :' value={"Lisans"}/>
						<InputField label='Mezun Olduğu Bölüm/Tr :' value={"İnşaat mühendisliği"}/>
						<InputField label='Mezun Olduğu Bölüm/En :' value={"Civil Engineering"}/>		
					</div>
					<div id='div2' className='flex flex-col gap-[1px] flex-1 justify-end'>
						<InputField label='Mezun Olduğu Okul/Tr :' value={"İnşaat ve çevre mühendisliği fakültesi"}/>
						<InputField label='Mezun Olduğu Okul/En :' value={"Faculty of civil and environmental engine..."}/>
					</div>
				</div>
			  </div>
			  <div className='shadow-lg mt-6'>
				<div className='w-full bg-[#f7f7f7] px-6 py-3 text-[14px] text-[#212529] font-[500] leading-[21px]'>Okul Bilgileri</div>
				<div className='flex flex-col lg:flex-row py-5 px-10 w-full'>
					<div id='div1' className='flex flex-col gap-[1px] flex-1' >	
						<InputField label='Hazırlayan Yetkili :' value={"Öğrenci İşleri Daire Başkanı"}/>
						<InputField label='Veriliş Tarihi :' value={"Civil Engineering"}/>		
					</div>
					<div id='div2' className='flex flex-col gap-[1px] flex-1 '>
						<InputField label='Tanzim Eden :' value={"Tamer şanlıdağ"}/>
						<InputField label='Diploma Numarası :' value={"58518"}/>
					</div>
				</div>
			  </div>
		  </div>
		  </div>
		  </div>
		 
	  </div>
  )
}

export default Main