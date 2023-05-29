import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function Hero({mainHeading, subHeading, button, bannerImg, style}) {
  return (
	<>
	<div className={style}>
            <div className="xl:pt-15 w-full xl:w-1/2  lg:pb-0 md:pb-0 lg:ml-20 lg:ml-20">
			<h1 className="lexendFont my-2 text-gray-800 font-bold text-[33px] lg:text-[33px] md:text-[20px] xl:text-[33px]">
			{mainHeading}
                            </h1>
                            <p className="basicFont mb-5 text-[#BF6FFF] font-medium">{subHeading}</p>
          <HashLink to="#howItWorks" smooth>
        {!button &&  <button
                type="submit"
                className="flex w-[150px] justify-center rounded-full text-center py-2.5 text-[17px] font-normal bg-[#BF6FFF] mb-10 text-white text-base"
          >
               {button} 
                 </button>}            
            </HashLink>
			</div>
                
            <div>
                <img src={bannerImg} className="md:w-[80%] lg:w-[90%] md:mt-[-50px]" />
            </div>
        </div>

</>
  )
}
