import React from 'react'
import cloudBackLeft from '../../../../assets/clouds/cloud-back-left.png'
import cloudBackRight from '../../../../assets/clouds/cloud-back-right.png'
import cloudBackMiddle from '../../../../assets/clouds/cloud-back-middle.png'
import cloudMidLeft from '../../../../assets/clouds/cloud-mid-left.png'
import cloudMidRight from '../../../../assets/clouds/cloud-mid-right.png'
import cloudMidMiddle from '../../../../assets/clouds/cloud-mid-middle.png'
import cloudFront1 from '../../../../assets/clouds/cloud-front-1.png'


function Clouds(): React.JSX.Element {
  return (
    <div className=' relative min-h-[80vh] w-full overflow-x-hidden overflow-y-hidden  '>
        {/*back layer */}
        <div className='back-left w-[45%] h-[36%]   absolute z-10 top-[5%] left-[-10%] bg-center bg-no-repeat bg-cover ' style={{backgroundImage: `url(${cloudBackLeft})`}}/>
        <div className='back-right w-[50%] h-[50%]  absolute z-10 top-[-10%] right-[-10%] bg-center bg-no-repeat bg-cover ' style={{backgroundImage: `url(${cloudBackRight})`}}/>
        <div className='back-mid w-[60%] h-[48%]  absolute z-10 top-[30%] left-[50%] -translate-1/2 bg-center bg-no-repeat bg-cover ' style={{backgroundImage: `url(${cloudBackMiddle})`}}/>
        {/*middle layer */}
        <div className='mid-right w-[60%] h-[48%]   absolute z-20 top-[20%] right-[-10%] bg-center bg-no-repeat bg-cover ' style={{backgroundImage: `url(${cloudMidRight})`}}/>
        <div className='mid-left w-[60%] h-[48%]   absolute z-20 top-[25%] left-[-10%] bg-center bg-no-repeat bg-cover ' style={{backgroundImage: `url(${cloudMidLeft})`}}/>
        
        <div className='mid-mid w-[60%] h-[48%]   absolute z-15 top-[25%] left-[50%] -translate-x-2/3 bg-center bg-no-repeat bg-cover ' style={{backgroundImage: `url(${cloudMidMiddle})`}}/>
        {/*fornt layer */}
        <div className='font-mid w-[60%] h-[48%]    absolute z-15 top-[55%] left-[50%] translate-x-[-20%] bg-center bg-no-repeat bg-cover ' style={{backgroundImage: `url(${cloudFront1})`}}/>
        
    </div>
  )
}

export default Clouds