import React from 'react'
import Classes from './header.module.css'
import { IoMenuSharp } from "react-icons/io5";

function LowerList() {
  return (
    <div className={Classes.lower_list}>
      <ul>
        <li>
          <IoMenuSharp />
          <a href="">All</a>
        </li>
        <li>
          <a href="">Today`s Deals</a>
        </li>
        <li>
          <a href="">Customer Service</a>
        </li>
        <li>
          <a href="">Registry</a>
        </li>
        <li>
          <a href="">Gift Cards</a>
        </li>
        <li>
          <a href="">Sell</a>
        </li>
      </ul>
    </div>
  );
}

export default LowerList
