/* eslint-disable no-unused-vars */
import React from 'react'
import sideImage from "../../assets/banner2.svg"

const Header = () => {
  return (
      <div className=' h-96 bg-primary text-white flex justify-between items-center'>
          <div className='flex justify-center flex-col items-start pl-20'>
              <h1 className='text-4xl font-bold text-center '>Create Collection</h1>
              <p>Home / Create Collection</p>
        </div>
        <div>
            <img className=' w-96 mr-40' src={sideImage} alt="" />
        </div>
    </div>
  )
}

export default Header
// metadata.imageUri
// const handleImageChange = (event) => {
//   const file = event.target.files[0];
//   if (file) {
//     const reader = new FileReader();

//     reader.onload = (e) => {
//       setSelectedImage(e.target.result);
//     };

//     reader.readAsDataURL(file);
//   }
// };