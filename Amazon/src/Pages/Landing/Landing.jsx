import React from 'react'
import Carousel from '../../Component/Carousel/Carousel';
import Category from '../../Component/Category/Category';
import Product from '../../Component/Product/Product';
import LayOut from '../../Component/LayOut/LayOut'
function Landing() {
  return (
    <LayOut>
      <Carousel/>
      <Category/>
      <Product/>
    </LayOut>
  )
}

export default Landing
