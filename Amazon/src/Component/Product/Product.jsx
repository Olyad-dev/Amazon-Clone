import React, { useEffect, useState } from 'react';
import classes from './product.module.css'
import axios from "axios";
import ProductCard from './ProductCard';
import Loader from '../Loader/Loader';


function Product() {
    const [products, setProducts] = useState([])
    const [isLoading, setisLoading] = useState(false);
    useEffect(()=>{
      setisLoading(true);
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setProducts(res.data)
            setisLoading(false);
        }).catch((err)=>{
            console.log(err)
            setisLoading(false);
        })
    },[])
  return (
    <>
    {isLoading && <Loader/>}
      <section className={classes.product_container}>
        {products?.map((singleProduct) => (
          <ProductCard product={singleProduct} key={singleProduct.id} renderAdd={true}/>
        ))}
      </section>
      
    </>
  );
}

export default Product
