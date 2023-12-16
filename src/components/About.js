import './GlobalStyles.css' 
import res_img from '../assets/restaurant.jpg';
import img2 from '../assets/Mario and Adrian b.jpg';
import img3 from '../assets/Mario and Adrian A.jpg';
import img4 from '../assets/restauranfood.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUtensils } from '@fortawesome/free-solid-svg-icons';

function AboutPage() {
return (
  <div>
  <h2 style={{ marginLeft:'2rem', color:'whitesmoke',textAlign:'center'}}> Chicago - Image Gallery</h2>
    <div style={{display:'flex'}}>
    <img  src={res_img} alt="restaurant" className='about_img_gallery center'/>
    <img  src={img2} alt="restaurant" className='about_img_gallery center'/>
   
    <img  src={img4} alt="restaurant" className='about_img_gallery center'/>
    <img  src={img3} alt="restaurant" className='about_img_gallery center'/>
    </div>
    <div> 
    <p  style={{ marginLeft:'2rem'}}> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
    </div> 
    <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}> 
    <div style={{margin:'2rem'}}>
        <h5 className='about-head'> Call Us <FontAwesomeIcon icon={faPhone} />  </h5>
        <p className='about-p'> +65 998 00 080</p>
    </div>

    <div style={{margin:'2rem'}}>
        <h5 className='about-head'> Visit Us  <FontAwesomeIcon icon={faUtensils} /> </h5>
        <p className='about-p'> 3, West Road, Great canal Avenue, Chicago</p>
    </div>
    <div style={{margin:'2rem'}}>
        <h5 className='about-head'> Mail Us <FontAwesomeIcon icon={faEnvelope} />  </h5>
        <p className='about-p'> littlelemon_chicago@ll.com</p>
    </div>
    </div>
   
  </div>
 
)
}

export default AboutPage;