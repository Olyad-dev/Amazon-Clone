import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Rating from "@mui/material/Rating";
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './product.module.css'
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';

function ProductCard({ product, flex, renderDesc, renderAdd}) {
  const { title, image, id, rating, price, description } = product;

    const [state, dispatch] = useContext(DataContext)
    
    const addToCart = () =>{
      dispatch({
        type:Type.ADD_TO_BASKET,
        item:{
          title, image, id, rating, price, description
        }
      })
    }

  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div className={classes.desc}>{description}</div>}
        {rating && (
          <div className={classes.rating}>
            <Rating value={rating?.rate} precision={0.1} />
            <small>{rating?.count}</small>
          </div>
        )}
        <div>
          <CurrencyFormat amount={price} />
        </div>

   {
    renderAdd && <button className={classes.button} onClick={addToCart}>add to cart</button>
   }

        
      </div>
    </div>
  );
}

export default ProductCard
