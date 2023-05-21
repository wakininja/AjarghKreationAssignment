import React from 'react'

function header() {
  return (
    <header className = "bg-gray-50">
{/* this is for header container breakpoint*/}
        <div className='xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3'> 

        {/* this is for medium breakpoint header */}

            <div className='md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0'>
                <input type ='text' className='input-text' placeholder='search..'/>
            </div>

        {/* This is for  Design Order */}
            <div className='shrink w-80 sm:order-2'>
                <a>Design</a>
            </div>

        {/* This is  for flex order */}
            <div className='w-96 order-3 flex justify-center'>
                <div className="flex gap-6">
                    {/* social icon */}
                    <a>faceebook</a>
                    <a>faceebook</a>
                    <a>faceebook</a>
                    
                </div>
            </div>

        </div>
    </header>
  )
}

export default header
