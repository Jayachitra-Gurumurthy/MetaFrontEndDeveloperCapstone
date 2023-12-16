import './GlobalStyles.css' ;
import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import HomePage from './HomePage';
import Specials from './Specials';
import Testimonials from './testimonials';
import ReserveTable from './ReserveTable';

import logo from '../assets/restaurant chef B.jpg';
import AboutPage from './About';

const  MenuData = [{
  Name: 'Happy Customer -  Mary Philip ',
  Rating : 4,
  Review : `Great Food!! Wonderful ambience!! Must Visit place with your friends & family`,
  imageSrc : logo
},
{
 Name: 'Happy Customer - Leo Meghan ',
 Rating : 5,
 Review : ` Loved their Bruschetta !! Will be coming back soon`,
 imageSrc : logo
},
{
Name: 'Happy Customer - John Henry ',
Rating : 3.5,
Review : `Wonderful dining experience!! Awesome varities of food !!`,
imageSrc : logo
}
]



function MainSection() {
  
  const fetchAPI = (date) => {   
    var times = [];
    let temp;
    for(let i=0;i<4;i++) {
    let x = Math.floor(Math.random() * 23)
    if(x > 0) {
     temp = x > 9 ? x + ':00' : x + ':30';
     // eslint-disable-next-line no-unused-expressions
    times.includes(temp) ? '' : times.push(temp)
    }
  }
   return times;
  } 
  const submitAPI = (form) => {
    return true;
  }
  const  initializeTimes =  {availableTimes: fetchAPI(new Date())}

  const [state ,dispatch] = useReducer(updateTimes,initializeTimes);

  function updateTimes (state,date) {
    return {availableTimes: fetchAPI(new Date())}
}

return (
  <div className='mainPage'> 
 
      <Routes>
      <Route path="/" element={<HomePage/>}> </Route>
        <Route path="/Home" element={<HomePage/>}> </Route>
        <Route path="/specials" element={<Specials/>}> </Route>
        <Route path="/testimonials" element={<Testimonials MenuData = {MenuData} />}> </Route>
        <Route path="/reservation" element={<ReserveTable availableTimes= {state} dispatch= {dispatch}/>}> </Route>
        <Route path="/about" element={<AboutPage/>}> </Route>
      </Routes>
 
    </div>
)
}

export default MainSection;