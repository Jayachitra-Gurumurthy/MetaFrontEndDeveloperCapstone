import { useState } from 'react';
import './GlobalStyles.css';
import Alert from 'react-bootstrap/Alert';


function ReserveTable(props) {
   const [date,setDate] = useState("");
   const [time,setTime] = useState("");
   const [dinersNum,setDinersNum] = useState(1);
   const [occasion,setOccasion] = useState('Birthday');
   const [showAlert,setAlert] = useState(false)
   const handleSubmit = (e) => {
      setAlert(true);
      console.log(showAlert)
      e.preventDefault();
      
   }
return (
  

  <div style={{textAlign:'center',marginTop:'1rem'}}>
 { !showAlert &&
   <> 
   <h4 style={{color:'white'}}> Table Reservation Form </h4>
  <p style={{color:'white'}}> We are here to help you!! Please fill out the below form to serve you better!! </p>
  </>
}
   {
  showAlert &&
     
  <Alert className='alert text-danger' variant='success' dismissible onClose={()=> {setAlert(false) }}>
      Thanks for choosing us ! Your Booking is confirmed ! 
    </Alert>
   
}
{ !showAlert && 
  <div className='card reserve-form-card mt-2'> 
  <div className='card-body'>
  <form onSubmit={handleSubmit} style={{display: 'grid',maxWidth: '300px',gap: '15px',margin:'auto'}}>
  
   <label>Choose date <input type="date" id="res-date" value={date} onChange={(e) => { setDate(e.target.value);props.dispatch(e.target.value) } } required/> </label>
   
  
   <label>Choose time 
   <select id="res-time " value={time} onChange={(e) => { setTime(e.target.value); props.dispatch(e.target.value)  }} required>
   
   { props.availableTimes.availableTimes.map((key,value) => <option key={value} value={value}> {key} </option> )} 
   </select>
   </label>
   
   
   
   <label>Number of guests
   <input type="number" placeholder="1" min="1" max="10" id="guests" value={dinersNum} onChange={(e) => setDinersNum(e.target.value)} required/> </label>
   <label>Occasion
   <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select></label>
   <input type="submit" className='btn btn-warning' value="Make Your reservation"/>
   
</form>
  </div>
   </div>
   }
  </div>
)
}

export default ReserveTable;

