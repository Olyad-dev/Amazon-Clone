import React, { useContext } from "react";
import Classes from "./header.module.css";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { BiCart } from "react-icons/bi";
import logo from "../../assets/img/amazon_PNG11.png";
import america from '../../assets/img/America.png';
import LowerList from "./LowerList";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

function Header() {

   const [{user, basket}, dispatch] = useContext(DataContext)

   const totalItem = basket?.reduce((amount, item)=>{ return item.amount + amount},0)
  return (
    <section className={Classes.fixed}>
      <section className={Classes.header_container}>
        <div className={Classes.logo_container}>
          {/* logo */}
          <Link to="/">
            <img src={logo} alt="amazon logo" />
          </Link>

          {/* delivery */}
          <div className={Classes.delivery}>
            <span>
              <CiLocationOn size={20} />
            </span>
            <div>
              <p style={{ fontWeight: "normal" }}>Deliver to </p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* search */}
        <div className={Classes.search}>
          <select>
            <option value="selected">All</option>
            <option value="#">All Departments</option>
            <option value="#">Arts &amp; Crafts</option>
            <option value="#">Automotive</option>
            <option value="#">Baby</option>
            <option value="#">Beauty &amp; Personal Care</option>
            <option value="#">Books</option>
            <option value="#">Boys' Fashion</option>
            <option value="#">Computers</option>
            <option value="#">Deals</option>
            <option value="#">Digital Music</option>
            <option value="#">Electronics</option>
            <option value="#">Girls' Fashion</option>
            <option value="#">Health &amp; Household</option>
            <option value="#">Home &amp; Kitchen</option>
            <option value="#">Industrial &amp; Scientific</option>
            <option value="#">Kindle Store</option>
            <option value="#">Luggage</option>
            <option value="#">Men's Fashion</option>
            <option value="#">Movies &amp; TV</option>
            <option value="#">Music, CDs &amp; Vinyl</option>
            <option value="#">Pet Supplies</option>
            <option value="#">Prime Video</option>
            <option value="#">Software</option>
            <option value="#">Sports &amp; Outdoors</option>
            <option value="#">Tools &amp; Home Improvement</option>
            <option value="#">Toys &amp; Games</option>
            <option value="#">Video Games</option>
            <option value="#">Women's Fashion</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <IoIosSearch size={27} />
        </div>

        {/* right side link */}
        <div className={Classes.order_container}>
          <Link to="#" className={Classes.language}>
            <img src={america} alt="america" />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>
          <Link to={!user && "/auth"}>
            <div>
              {user ? (
                <>
                  <p>Hello, {user?.email?.split("@")[0]}</p>
                  <span onClick={() => auth.signOut()}>Sign Out</span>
                </>
              ) : (
                <>
                  <p>Hello, sign in</p>
                  <span>Account & Lists</span>
                </>
              )}
            </div>
          </Link>
          <Link to="/Orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>
          <Link to="/cart" className={Classes.cart}>
            <BiCart size={35} />
            Cart
            <span>{totalItem}</span>
          </Link>
        </div>
      </section>
      <LowerList />
    </section>
  );
}

export default Header;
