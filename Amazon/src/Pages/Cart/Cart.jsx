import React, { useContext } from 'react'
import classes from './cart.module.css'
import { Link } from "react-router-dom";
import LayOut from '../../Component/LayOut/LayOut'
import { DataContext } from '../../Component/DataProvider/DataProvider';
import ProductCard from '../../Component/Product/ProductCard'
import CurrencyFormat from '../../Component/CurrencyFormat/CurrencyFormat';
import { Type } from '../../Utility/action.type';
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

function Cart() {
  const [{basket, user}, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item)=>{
  return  item.price * item.amount + amount
  },0)

   const increment =(item) =>{
    dispatch({
      type: Type.ADD_TO_BASKET,
      item
    })
   }

   const decrement = (id) => {
     dispatch({
       type: Type.REMOVE_FROM_BASKET,
       id
     });
   };
   
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h1>Hello</h1>
          <h3>Your Shopping Basket</h3>
          <hr />

          {basket?.length == 0 ? (
            <div className={classes.empty_cart}>
              <img src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" />
              <p>Oops! No items in your cart</p>
            </div>
          ) : (
            basket?.map((item, index) => {
              return (
                <section key={index} className={classes.cart_product}>
                  <ProductCard
                    product={item}
                    renderDesc={true}
                    flex={true}
                    renderAdd={false}
                  />
                  <div className={classes.btn_container}>
                    <button
                      className={classes.btn}
                      onClick={() => increment(item)}
                    >
                      <BiSolidUpArrow size={30} />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <BiSolidDownArrow size={30} />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p style={{fontWeight: "bold"}}>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payment">Proceed to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart
