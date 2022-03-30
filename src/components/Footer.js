import React from 'react'
import { BiCoffeeTogo } from 'react-icons/bi'

export default function Footer() {
  return (
    <div className="bg-gray-700 text-white p-12 text-center flex justify-center items-center gap-4">Made by Hubert Madej <BiCoffeeTogo className='scale-150 transition duration-300 hover:fill-red-500 hover:animate-pulse' /></div>
  )
}
