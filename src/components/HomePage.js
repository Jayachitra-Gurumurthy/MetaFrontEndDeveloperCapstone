import './GlobalStyles.css' 
import res_img from '../assets/restaurant.jpg';

function HomePage() {
return (
  <div>
  <h2 style={{ marginLeft:'2rem', color:'#F4CE14',textAlign:'center'}}> Little Lemon - Chicago </h2>
    <img  src={res_img} alt="restaurant" className='res_img center'/>
    <div> 
    <p  style={{ marginLeft:'2rem'}}> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
    </p>
    </div> 
  </div>
 
)
}

export default HomePage;