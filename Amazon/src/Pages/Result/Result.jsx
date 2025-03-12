import React, {useEffect, useState} from 'react'
import classes from './result.module.css'
import LayOut from "../../Component/LayOut/LayOut";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {productUrl} from '../../Api/endPoint'
import ProductCard from '../../Component/Product/ProductCard';
import Loader from '../../Component/Loader/Loader';
function Result() {
  const [results, setResults] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const {categoryName} = useParams();
  useEffect(()=>{
    setisLoading(true);
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });

  }, [])

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <br />

        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard key={product.id} product={product}
              renderDesc={false}
              renderAdd={true} />
            ))}
          </div>
        )}

      </section>
    </LayOut>
  );
}

export default Result
