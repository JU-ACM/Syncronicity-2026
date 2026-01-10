import React from 'react'
import heroimg from '../../../../assets/dashboard/hero-img.png';

function Robot() : React.JSX.Element {
  return (
                <div className="relative p-4">
              <div 
                className="absolute inset-x-0 top-1/2 transform -translate-y-[40%] h-[200%] p-4 z-50 bg-no-repeat bg-center bg-cover" 
                style={{ backgroundImage: `url(${heroimg})`, height: '200%' }}
              >
                <button className='joinbtn w-[75%] h-auto bg-[#4A24D5] rounded-full text-white font-medium absolute bottom-[17%] -right-[45%]'>
                  Join ACM-JU
                </button>
              </div>
            </div>
  )
}

export default Robot