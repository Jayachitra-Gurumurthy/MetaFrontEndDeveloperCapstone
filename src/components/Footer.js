import './GlobalStyles.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered } from '@fortawesome/free-solid-svg-icons'
function Footer() {
return (
        <footer className="footer">
        <span>  All rights Reserved 
        <FontAwesomeIcon icon={faRegistered} /> Little Lemon Pvt Ltd </span> 
         {/* <img src={Logo} alt="Company logo"/> */}
    </footer> 
)
}

export default Footer;