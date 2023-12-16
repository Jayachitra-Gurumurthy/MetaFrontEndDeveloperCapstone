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
                    <p className='mt-5'> Rating  {displayStarRating(item.Rating)}  </p>
                   </div>
                   
                  <h5 class="card-title m-3 text-danger">  {item.Name} </h5>
                  <p class="card-text m-3"> {item.Review}</p>
                  <h6 className='m-3 text-primary'> It means a lot to us !! Thanks a lot !! </h6>
                 
                </div>
              </div>
              </div>  
                   :  <div class="carousel-item ">
             <div class="card card-testimonials mx-auto" >
                <div class="card-body-testimonials ">
                <div style={{display:'flex'}}>
                   <img src={item.imageSrc} className=' testimonial-img  m-3' alt='Logo'/>
                    <p className=' mt-5'> Rating  {displayStarRating(item.Rating)}  </p>
                   </div>
                  <h5 class="card-title m-3 text-danger">  {item.Name} </h5>
                  <p class="card-text m-3"> {item.Review}</p>
                 <h6 className='m-3 text-primary'> It means a lot to us !! Thanks a lot !! </h6>
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