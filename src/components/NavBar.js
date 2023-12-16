/* eslint-disable no-unused-expressions */
import './GlobalStyles.css';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
function NavBar() {
       const HideMenu = false;
return (
       <>
      
       <div className = {HideMenu ? 'bg-warning hide': 'bg-warning'} >
     
        <ul className='NavList'> 
        <li>   <Link className='side-menu' to="/Home">Home</Link> </li>
        <li>   <Link className='side-menu' to="/specials"> Special Menu </Link>  </li> 
        <li>   <Link className='side-menu' to="/testimonials"> Testimonial </Link>  </li> 
        <li>   <Link className='side-menu' to="/reservation"> Reserve Table </Link> </li> 
        <li>   <Link className='side-menu' to="/about">About us </Link> </li> 
        </ul>
      
       </div>
       <Outlet/>
       </>
)
}

export default NavBar;