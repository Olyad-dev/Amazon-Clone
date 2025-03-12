import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Router from "./Router";
import Loader from "./Component/Loader/Loader";
import { auth } from "./Utility/firebase";
import { Type } from "./Utility/action.type";
import { DataContext } from "./Component/DataProvider/DataProvider";

function App() {
  const [{user}, dispatch] = useContext(DataContext)

useEffect(() =>{
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        })
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        })
      }
    })
},[])




  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return <>{isLoading ? <Loader /> : <Router />}</>;
}

export default App;
