import React from 'react'
import cityBack from '../../../../assets/about/buildings/city-back.svg'
import cityMid from '../../../../assets/about/buildings/city-mid.svg'
import cityFront from '../../../../assets/about/buildings/city-front.svg'

const Cityscape : React.FC = () => {
  return (
    <div className='relative transform translate-y-[-100%] md:translate-y-[-50%] lg::translate-y-0 h-[50vh] w-full '>
        <img src={cityBack} className='w-full absolute bottom-0'/>
        <img src={cityMid} className='w-full absolute bottom-0'/>
        <img src={cityFront} className='w-full absolute bottom-0'/>
    </div>
  )
}

export default Cityscape