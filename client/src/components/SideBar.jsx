import React from 'react'
import {IoLogoYoutube, IoLogoLinkedin, IoLogoInstagram} from "react-icons/io5"
function SideBar() {
  return (
    <div className='w-[90px] border-r-[4px] h-screen fixed flex flex-col justify-around item-center'>
      <h2 className='-rotate-90 font-medium text-xl'>3D Artist</h2>
      <div className='-rotate-90'>
      <IoLogoYoutube className='cursor-pointer hover:scale-110 transition-all ease-in-out'/>
      <IoLogoLinkedin className='cursor-pointer hover:scale-110 transition-all ease-in-out'/>
      <IoLogoInstagram className='cursor-pointer hover:scale-110 transition-all ease-in-out'/>
      </div>
    </div>
  )
}

export default SideBar