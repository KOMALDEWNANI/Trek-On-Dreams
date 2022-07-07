import React from 'react'

function Footer() {
  return (
    <div className='bg-slate-400 bg-blend-color-dodge'>
      <ul className='flex justify-around'>
        <li className='cursor-pointer px-2 py-2 text-lg hover:bg-slate-300'>Move to Top ⬆️</li>
        <li className='px-2 py-2 text-lg'>Privacy Policy</li>
        <li className='px-2 py-2 text-lg'>Copyright ©️</li>
      </ul>
    </div>
  )
}

export default Footer
