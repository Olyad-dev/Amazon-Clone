import { Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

import logo from "../../assets/img/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTopAndNavigate = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="backTo">
        <p style={{ color: "white" }} onClick={scrollToTopAndNavigate}>
          Back to top
        </p>
      </div>
      <div className="footer_container">
        <div className="footr_details_one">
          <h3>Get to Know Us</h3>
          <Link to="">Careers</Link>
          <br />
          <Link to="">Blog</Link>
          <br />
          <Link to="">About Amazon</Link>
          <br />
          <Link to="">Investor Relations</Link>
          <br />
          <Link to="">Amazon Devices</Link>
          <br />
          <Link to="">Amazon Science</Link>
          <br />
        </div>
        <br />
        <div className="footr_details_one">
          <h3>Make Money with Us</h3>
          <Link to="">Sell Products on Amazon</Link>
          <br />
          <Link to="">Sell on Amazon Business</Link>
          <br />
          <Link to="">Sell apps on Amazon</Link>
          <br />
          <Link to="">Become an Affiliate</Link>
          <br />
          <Link to="">Advertise Your Products</Link>
          <br />
          <Link to="">Self-Publish with Us</Link>
          <br />
          <Link to="">Host an Amazon Hub</Link>
          <br />
          <Link to="">›See More Make Money with Us</Link>
        </div>
        <div className="footr_details_one forres">
          <h3>Amazon Payment Products</h3>
          <Link to="">Amazon Business Card</Link>
          <br />
          <Link to="">Shop with Points</Link>
          <br />
          <Link to="">Reload Your Balance</Link>
          <br />
          <Link to="">Amazon Currency Converter</Link>
          <br />
        </div>
        <div className="footr_details_one forres">
          <h3>Let Us Help You</h3>
          <Link to="">Amazon and COVID-19</Link>
          <br />
          <Link to="">Your Account</Link>
          <br />
          <Link to="">Your Orders</Link>
          <br />
          <Link to="">
            Shipping Rates &<br /> Policies
          </Link>
          <br />
          <Link to="">
            Returns &<br /> Replacements
          </Link>
          <br />
          <Link to="">Manage Your</Link>
          <br />
          <Link to="">Content and Devices</Link>
          <br />
          <Link to="">Amazon Assistant</Link>
          <br />
          <Link to="">Help</Link>
          <br />
        </div>
      </div>
      <Divider
        style={{
          width: "100%",
          marginTop: 50,
          borderColor: "#dddddd",
        }}
      />
      <div className="footer_container2">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="footer_div">English</div>
        <div className="footer_div">$USD - U.S. Dollar</div>
        <div className="footer_div">United States</div>
      </div>
      <div className="lastdetails">
        <table>
          <thead>
            <tr>
              <th>Sell on Amazon</th>
              <th>Amazon Business</th>
              <th>AmazonGlobal</th>
              <th>Home Services</th>
              <th>Amazon Ignite</th>
              <th>Amazon Web Services</th>
              <th>Audible</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sell on Amazon</td>
              <td>Everything For Your Business</td>
              <td>Ship Orders Internationally</td>
              <td>Home Services Experienced Pros</td>
              <td>Sell your original Digital Educational Resources</td>
              <td>Scalable Cloud Computing Services</td>
              <td>Listen to Books & Original Audio Performances</td>
            </tr>

            <tr>
              <th>Book Depository</th>
              <th>Box Office Mojo</th>
              <th>ComiXology</th>
              <th>DPReview</th>
              <th>Fabric</th>
              <th>Goodreads</th>
              <th>IMDb</th>
            </tr>
            <tr>
              <td>Books With Free Delivery Worldwide</td>
              <td>Find Movie Box Office Data</td>
              <td>Thousands of Digital Comics</td>
              <td>Digital Photography</td>
              <td>Sewing, Quilting & Knitting</td>
              <td>Book reviews & recommendations</td>
              <td>Movies, TV & Celebrities</td>
            </tr>
            <tr>
              <th>IMDbPro</th>
              <th>Kindle Direct Publishing</th>
              <th>Prime Video Direct</th>
              <th>Shopbop</th>
              <th>Woot!</th>
              <th>Zappos</th>
              <th>Ring</th>
            </tr>
            <tr>
              <td>Get Info Entertainment Professionals Need</td>
              <td>Indie Digital & Print Publishing Made Easy</td>
              <td>Video Distribution Made Easy</td>
              <td>Designer Fashion Brands</td>
              <td>Deals and Shenanigans</td>
              <td>Shoes & Clothing</td>
              <td>Smart Home Security Systems</td>
            </tr>
            <tr>
              <th>Eero WiFi</th>
              <th>Blink</th>
              <th>Neighbors App</th>
              <th>Amazon Subscription Boxes</th>
              <th>PillPack</th>
              <th>Amazon Renewed</th>
              <th>Amazon Second Chance</th>
            </tr>
            <tr>
              <td>Stream 4K Video in Every Room</td>
              <td>Smart Security for Every Home</td>
              <td>Real-Time Crime & Safety Alerts</td>
              <td>Top subscription boxes – right to your door</td>
              <td>Pharmacy Simplified</td>
              <td>Like-new products you can trust</td>
              <td>Pass it on, trade it in, give it a second life</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="footer__last">
        Conditions of Use & Sale &nbsp; &nbsp;&nbsp; Privacy Notice &nbsp;
        &nbsp;&nbsp; Consumer Health Data Privacy Disclosure &nbsp; &nbsp;&nbsp;
        © 1996-{year}, Amazon.com, Inc. or its affiliates
      </p>
      <p className="built">Cloned by Olyad.G</p>
    </footer>
  );
};

export default Footer;
