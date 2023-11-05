/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/common/Navbar'
import ProductHeader from '../components/Product/ProductHeader'
import Footer from '../components/common/Footer'
import Card from '../components/Product/Card'
import { useSelector } from 'react-redux'
const Product = () => {

  return (
    <div>
      <Navbar />
      <ProductHeader />
      <div className='flex mb-10 flex-wrap gap-4'>
        {useSelector((state) => state.rows).map(item => {
          console.log(item)
          return <Card key={item.Id}
            image={item.image}
            title={item.title}
            price={item.price}
            Creator={item.Creator}
            profile={item.profile}
          />
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Product