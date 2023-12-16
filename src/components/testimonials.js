import './GlobalStyles.css' 



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Testimonials(props) {
   
     let displayStarRating = (size) =>  {
      let stars = []
      for (let i = 0; i < size; i++) {
        stars.push(<FontAwesomeIcon style={{color:'gold'}} icon={faStar} />)
      }
    
      return (
        <div>
          {stars}
        </div>
      );
       
        }
     
     let displayTestimonials = props.MenuData.map((item,index)=>   {
         return (
             
               (index===0) ?
                <div class="carousel-item active">
                  <div class="card card-testimonials mx-auto" >
                <div class="card-body-testimonials ">
                   <div style={{display:'flex'}}>
                   <img src={item.imageSrc} className=' testimonial-img  m-3' alt='Logo'/>
                   <div> 
                   <h5 class="card-title mt-5 text-danger">  {item.Name} </h5>
                  <p class="card-text mt-5"> {item.Review}</p>
                  <span className='m-3 text-success '>   {displayStarRating(item.Rating)}  </span>
                   </div>
                   </div>
                </div>
              </div>
              </div>  
                   :  <div class="carousel-item ">
             <div class="card card-testimonials mx-auto" >
             <div class="card-body-testimonials ">
                   <div style={{display:'flex'}}>
                   <img src={item.imageSrc} className=' testimonial-img  m-3' alt='Logo'/>
                   <div> 
                   <h5 class="card-title mt-5 text-danger">  {item.Name} </h5>
                  <p class="card-text mt-5"> {item.Review}</p>
                  <span className='m-3 text-success '>   {displayStarRating(item.Rating)}  </span>
                   </div>
                   </div>
                </div>
              </div>
              </div>
             )
    })
 

return ( 
<>
   <div className='Testimonials'> 
<div id="testimonialsCarousel" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">

   {displayTestimonials}
  
    </div> 
    </div> 
    </div>

    <a class="carousel-control-prev" href="#testimonialsCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#testimonialsCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </>
)
}

export default Testimonials;