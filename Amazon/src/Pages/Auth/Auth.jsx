import React, { useContext, useState } from 'react'
import classes from './auth.module.css'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { auth } from '../../Utility/firebase';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import {DataContext} from '../../Component/DataProvider/DataProvider'
import { Type } from '../../Utility/action.type';
import {ClipLoader} from 'react-spinners'

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signin: false,
    signup: false
  })

  const [{user}, dispatch] = useContext(DataContext);
  const navigate = useNavigate()
  const navStateData = useLocation()

  const authHandler = async (e)=>{
    e.preventDefault();
   if (e.target.name === "signin") {
    setLoading({...loading, signin: true})
  signInWithEmailAndPassword(auth, email, password).then((userinfo)=>{
    dispatch({
      type: Type.SET_USER,
      user: userinfo.user
    })
    setLoading({ ...loading, signin: false });
    navigate(navStateData.state?.redirect || '/');
  }).catch((err)=>{
    setError(err.message);
    setLoading({ ...loading, signin: false });
  })
   }else{
     setLoading({ ...loading, signup: true });
createUserWithEmailAndPassword(auth, email, password)
  .then((userinfo) => {
    dispatch({
      type: Type.SET_USER,
      user: userinfo.user,
    });
     setLoading({ ...loading, signup: false });
     navigate(navStateData.state?.redirect || "/");
  }).catch((err) => {
    setError(err.message);
     setLoading({ ...loading, signup: false });
  });
   }
  }

  return (
    <section className={classes.login}>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign In</h1>
   {
    navStateData?.state?.msg && (
      <small style={{
        padding: "5px", textAlign: "center", color: "red", fontWeight: "bold",
      }}>
        {navStateData?.state?.msg}
      </small>
    )
   }

        
        <form action="">
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            className={classes.login_sign}
            type="submit"
            onClick={authHandler}
            name="signin"
          >
            {loading.signin ? (
              <ClipLoader size={15} color="white" />
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
          className={classes.login_register}
          type="submit"
          onClick={authHandler}
          name="signup"
        >
          {loading.signup ? (
            <ClipLoader size={15} color="white" />
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ padding: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
