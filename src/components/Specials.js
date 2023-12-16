import './GlobalStyles.css' 
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sp1 from '../assets/greek salad.jpg';
import sp2 from '../assets/bruchetta.svg';
import sp3 from '../assets/lemon dessert.jpg';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function Specials() {
  const [showModal,setShowModal] = useState(false); 
    const MenuData = [{
         Name: 'Greek Salad',
         Price :'$12.40',
         Description : `The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, 
         garnished with crunchy garlic and rosemary croutons`,
         imageSrc : sp1
    },
    {
        Name: 'Lemon Dessert',
        Price :'$5.00',
        Description : `This comes straight from grandma’s recipe book, every last ingredient has been sourced`,
        imageSrc : sp3
   },
   {
    Name: 'Bruschetta',
    Price :'$9.00',
    Description : `Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.`,
    imageSrc : sp2
}
]
    const displayCard =  MenuData.map((item) => 
        <div className="card card-specials">
        <img src={item.imageSrc} className="card-img-top" alt="..." />
        <div className="card-body bg-white">
         <div style={{display:'flex',width:'inherit'}}>  <h5 className="card-title">{item.Name}</h5>
          <p style={{color:'red', marginLeft:'2rem'}}>{item.Price} </p> </div> 
          <p className="card-text"> {item.Description} </p>
        </div>
        <button className="btn btn-outline-primary center mb-2" style={{width:'60%'}} onClick={() => {setShowModal(true);}}> Order Now  <FontAwesomeIcon icon={faCartShopping} />  </button>
      </div>
)
return ( <>

 { showModal &&  <Alert className='alert text- mt-2' variant='success' dismissible onClose={()=> {setShowModal(false) }}>
     Order Placed!! Your order tracking details will be shared shortly !  
    </Alert>
   }
    <h3 style={{ margin:'0.5rem', color:'#F4CE14',textAlign:'center'}}> Our Special Menu </h3>

    <div className='card-deck'> 
         {displayCard}
   </div>

  </>
)
}

export default Specials;