import './GlobalStyles.css' 
import Logo from '../assets/Logo.svg'
function Header() {
return (
  <div className='Header'>
  <img src={Logo} alt="Little Lemon Logo"/>
  </div>
)
}

export default Header;