import '../App.css';
import Btn from './LinkBtn';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to='/'><img src="https://i.pinimg.com/originals/45/7c/c0/457cc040ca23e98d84f70d215111255c.png" alt="#" /></Link>
      <ul>
        <li><Btn to='/' label='Home'/></li>
        <li><Btn to='/About' label='About'/></li>
        <li><Btn to='/Contact' label='Contact'/></li>
        <li><Btn to='/Calender' label='Calender'/></li>
        <li><Btn to='/Videos' label='Videos'/></li>
        <li>
         <form action="https://www.paypal.com/donate" method="post" target="_top">
          <input type="hidden" name="business" value="LG3977J3YP2F2" />
          <input type="hidden" name="no_recurring" value="0" />
          <input type="hidden" name="currency_code" value="USD" />
          <button className="btn" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button">Donate</button>
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </li>
      </ul>
      <ul>
        <li><Link className='donateBtn' to='/Apply'>Apply</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar