import React from 'react'

function ListofLinks():React.JSX.Element {
  return (
    <div className='h-[90%] w-full min-w-[200px]  flex-col justify-start gap-4 items-center hidden lg:flex '>
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