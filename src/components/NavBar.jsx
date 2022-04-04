import '../App.css';
import Btn from './LinkBtn';
import { Link } from "react-router-dom";

const NavBar = () => {
  const myDonateUrl = () => {
  window.open("https://www.paypal.com/donate/?business=LG3977J3YP2F2&no_recurring=0&currency_code=USD", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=500,height=500");
    }
  return (
    <nav>
      <Link to='/'><img src="https://i.pinimg.com/originals/45/7c/c0/457cc040ca23e98d84f70d215111255c.png" alt="#" /></Link>
      <ul>
        <li><Btn to='/' label='Home'/></li>
        <li><Btn to='/About' label='About'/></li>
        <li><Btn to='/Contact' label='Contact'/></li>
        <li><Btn to='/Calender' label='Calender'/></li>
        <li><Btn to='/Gallery' label='Gallery'/></li>
        <li>
          <button onClick={myDonateUrl} className="btn" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button">Donate</button>
        </li>
      </ul>
      <ul>
        <li><Link className='donateBtn' to='/Apply'>Apply</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar