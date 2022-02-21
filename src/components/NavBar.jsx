import React from 'react';
import '../App.css';
import Btn from './LinkBtn';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to='/'><img src="#" alt="#" /></Link>
      <ul>
        <li><Btn to='/' label='Home'/></li>
        <li><Btn to='/About' label='About'/></li>
        <li><Btn to='/Contact' label='Contact'/></li>
        <li><Btn to='/Calender' label='Calender'/></li>
        <li><Btn to='/Videos' label='Videos'/></li>
        <li><Btn to='/Donate' label='Donate'/></li>
      </ul>
      <ul>
        <li><Link className='donateBtn' to='/Apply'>Apply</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar