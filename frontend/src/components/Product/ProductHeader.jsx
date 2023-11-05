/* eslint-disable no-unused-vars */
import React from 'react'
import header from "../../assets/section-shape-1.png"

const ProductHeader = () => {
  return (
    <div className='w-[100%] bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center flex-col items-start py-24 px-10'>
      <img src="https://storage.googleapis.com/ton-strapi/internet_img_dc4e20f18b/internet_img_dc4e20f18b.png?updated_at=2023-07-14T10:08:22.798Z" alt="" className='absolute right-0 h-[256px]  z-10'/>
        <h1 className=' z-20 top-40 font-semibold text-4xl text-white'>Explore Collection</h1>
        <p className='text-black'><span className='text-white font-medium'>Home</span>/ Explore Collection</p>
    </div>
  )
}

export default ProductHeader
