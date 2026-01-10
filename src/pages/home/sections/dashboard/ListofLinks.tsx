import React from 'react'

function ListofLinks():React.JSX.Element {
  return (
    <div className='h-[90%] w-full flex flex-col justify-evenly items-center'>
      <button className=' w-full h-auto bg-white rounded-full text-[#248a95] font-medium '>
            Home
      </button>
      <button className=' w-full h-auto bg-white rounded-full text-[#248a95] font-medium '>
            About ACM-JU
      </button>
      <button className=' w-full h-auto bg-white rounded-full text-[#248a95] font-medium '>
            Events
      </button>
      <button className=' w-full h-auto bg-white rounded-full text-[#248a95] font-medium '>
            Subscription
      </button>

    </div>
  )
}

export default ListofLinks