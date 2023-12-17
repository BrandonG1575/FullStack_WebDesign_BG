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
    <div className='flex'>
      <div className='w-[90px] h-[90px] bg-slate-950'>
      </div>
      <div className='flex gap-14'>
        {menu.map((item)=>(
          <div className='cursor-pointer hover:underline font-medium'>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Header