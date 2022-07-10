import React from 'react'

function Footer() {
  return (
    <div className='bg-slate-400'>
      <ul className='flex justify-around'>
        <li className='cursor-pointer px-2 py-2 font-bold text-lg hover:bg-slate-300 hover:rounded-2xl'>Move to Top ⬆️</li>
        <li className='px-2 py-2 font-bold text-lg'>Privacy Policy</li>
        <li className='px-2 py-2 font-bold text-lg'>Copyright ©️</li>
      </ul>
    </div>
  )
}

export default Footer
