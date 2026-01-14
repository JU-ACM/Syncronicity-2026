import React from 'react'
import heroimg from '../../../../assets/dashboard/hero-img.png';
import herosvg from '../../../../assets/dashboard/hero-dashed-arrow.svg'

function Robot() : React.JSX.Element {
  return (
                <div className="relative -mt-12 md:mt-0">
                  <img className='w-auto h-auto scale-100 md:scale-175 ' src={heroimg} alt="robot image" />
                  <button className='joinbtn w-[50%] md:w-[100%] lg:w-[75%] h-auto bg-[#4A24D5] rounded-full text-white font-medium absolute bottom-[-50%] md:bottom-[-40%] lg:bottom-[-100%] right-[0%] md:-right-[80%] lg:-right-[40%] scale-75 lg:scale-100'>
                  Join ACM-JU 
                  <img src={herosvg} className='absolute top-[-50%] right-[-50%]'></img>
                </button>
              {/* <div 
                className="absolute inset-x-0 top-[60vh] transform -translate-y-[72vh] left-[65vw] -translate-x-[65vw] h-[200%] w-[100%] p-4 z-50 bg-no-repeat bg-center bg-cover bg-red-500/40 " 
                style={{ backgroundImage: `url(${heroimg})` }}
              >
                <button className='joinbtn w-[75%] h-auto bg-[#4A24D5] rounded-full text-white font-medium absolute bottom-[17%] -right-[45%]'>
                  Join ACM-JU
                </button>
              </div> */}
            </div>
  )
}

export default Robot