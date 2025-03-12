import React, { useState, useEffect } from "react";
import LayOut from "../../Component/LayOut/LayOut";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoint';
import ProductCard from "../../Component/Product/ProductCard";
import Loader from "../../Component/Loader/Loader";
function ProductDetail() {
  const {productId} = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setisLoading] = useState(false);
  useEffect(()=>{
       setisLoading(true);
        axios.get(`${productUrl}/products/${productId}`).then((res)=>{
          setProduct(res.data);
          setisLoading(false);
        }).catch((err)=>{
          console.log(err)
          setisLoading(false);
        })
  }, [])
  
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="small_size">
          <ProductCard
            product={product}
            flex={true}
            renderDesc={true}
            renderAdd={true}
          />
        </div>
      )}
    </LayOut>
  );
}

export default ProductDetail
