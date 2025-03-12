import React, { useContext, useEffect, useState } from "react";
import classes from "./order.module.css";
import LayOut from "../../Component/LayOut/LayOut";
import { DataContext } from "../../Component/DataProvider/DataProvider";
import { db } from "../../Utility/firebase";
import { collection, getDocs } from "firebase/firestore";
import ProductCard from "../../Component/Product/ProductCard";

function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        try {
          const ordersCollection = collection(db, "users", user.uid, "orders");

          const ordersSnapshot = await getDocs(ordersCollection);

          const ordersList = ordersSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setOrders(ordersList);

        } catch (error) {
          console.error("Error fetching orders: ", error);
        }
      }else{
        setOrders([])
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h2>Your Orders</h2>

          {/* ordered items */}
          
          {orders.length === 0 ? (
            <div className={classes.empty_order}>
              <img src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" />
              <p>You have no orders</p>
            </div>
          ) : (
            <div>
              {orders?.map((eachOrder, i) => (
                <div className={classes.product_div} key={i}>
                  <hr />
                  <p className={classes.orderId}>Order ID: {eachOrder?.id}</p>
                  {eachOrder?.basket?.map((order) => (
                    <ProductCard flex={true} product={order} key={order.id} />
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
