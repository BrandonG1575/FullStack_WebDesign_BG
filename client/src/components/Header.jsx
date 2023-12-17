import React from 'react'

function Header() {
  const menu = [
    {
      id:1,
      name: "HOME",
    },
    {
      id:2,
      name: "PROJECTS",
    },
    {
      id:3,
      name: "ABOUT ME",
    },
    {
      id:4,
      name: "CONTACT",
    },
  ];

  return (
    <div className='flex items-center w-screen justify-between border-b-[4px]'>
      <div className='w-[90px] h-[90px] bg-slate-300'>
      </div>
      <div className=' hidden md:flex gap-14 font-medium text-xl'>
        {menu.map((item)=>(
          <div className='cursor-pointer hover:underline'>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
      <div className='w-[90px] h-[90px] bg-slate-300'>
      </div>
    </div>
  )
}

export default Header