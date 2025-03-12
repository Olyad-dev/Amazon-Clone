import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Result from "./Pages/Result/Result";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51R0E4FKPvAUd0XRlH0P7lMpej0s6Zct0ymuhNSAcZBkPVVf8ajhElyjoiei7SK5F1H14hwIEnAPH0GC6CjUkFdDd00uagM0f5c"
);
function Routering() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/auth" element={<Auth />} />

        <Route
          path="/payment"
          element={
            <ProtectedRoute
              msg={"you must log-in to pay"}
              redirect={"/payment"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />

        <Route
          path="/Orders"
          element={
            <ProtectedRoute msg={"you must log-in to access your orders"} redirect={"/Orders"}>
              <Orders />
            </ProtectedRoute>
          }
        />

        <Route path="/category/:categoryName" element={<Result />} />

        <Route path="/products/:productId" element={<ProductDetail />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routering;
