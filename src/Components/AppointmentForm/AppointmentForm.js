import { useState } from "react"; 

 

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => { 

const [name, setName] = useState(''); 

const [phoneNumber, setPhoneNumber] = useState(''); 

const [date, setDate] = useState(''); 

 const [time, setTime] = useState(''); 


 const [selectedSlot, setSelectedSlot] = useState(null); 
  
const handleSlotSelection = (slot) => { 
setSelectedSlot(slot); 
 }; 

 // const handleSlotSelection = (slot,i) => { 
//     console.log(slot); 
//     console.log(setSelectedSlot(slot)); 

//   setSelectedSlot(slot); 

 //  document.getElementById(`btnslot${i}`).style.backgroundColor='green' 
// }; 
 const handleFormSubmit = (e) => { 
 e.preventDefault(); 

 onSubmit({ name, phoneNumber, date, time }); 

// Clear the form fields 

setName(''); 
setPhoneNumber(''); 
setDate(''); 
 setTime(''); 
 }; 

 

return ( 

 <form onSubmit={handleFormSubmit} className="appointment-form"> 

<div className="form-group"> 

<label htmlFor="name">Name:</label> 

<input 

 type="text" 
id="name" 
value={name} 

 onChange={(e) => setName(e.target.value)} 
 required 

/> 

 </div> 

<div className="form-group"> 

<label htmlFor="phoneNumber">Phone Number:</label> 

<input 

 type="tel" 

id="phoneNumber" 

value={phoneNumber} 

onChange={(e) => setPhoneNumber(e.target.value)} 
 required 
/> 

 </div> 

 <div className="form-group"> 

<label htmlFor="date">Date of Appointment:</label> 
<input 

 type="date" 
 id="date" 
value={date} 

 onChange={(e) => setDate(e.target.value)} 

 required 

 /> 

 </div> 

 <div className="form-group"> 

 <label htmlFor="time">Book Time Slot:</label> 

<select 

id="time" 
value={time} 

 onChange={(e) => setTime(e.target.value)} 

required 
 > 

<option value="">Select a time slot</option> 
<option value="9:00 AM">9:00 AM</option> 

<option value="10:00 AM">10:00 AM</option> 
{/* Add more options for different time slots */} 

</select> 

{/* <input 

                type="time" 

                id="time" 

                value={time} 

                onChange={(e) => setTime(e.target.value)} 

                required 

                /> */} 

{/* <input type="submit" 

              value="Slot 1" disabled       

              onClick={(e) => { 

                e.preventDefault(); 

                handleSlotSelection('Slot 1'); 

              }} 

            /> 

        <input className='btnslot' 

          type="submit" 

          value="Slot 2" 

          disabled={selectedSlot === 'Slot 2'} 

          onClick={(e) => { 

            e.preventDefault(); 

            handleSlotSelection('Slot 2'); 

          }} 

        /> 

        <input className='btnslot' 

          type="submit" 

          value="Slot 3" 

          disabled={selectedSlot === 'Slot 3'} 

          onClick={(e) => { 

            e.preventDefault(); 

            handleSlotSelection('Slot 3'); 

          }} 

        /> 

        <input className='btnslot' 

          type="submit" 

          value="Slot 4" 

          disabled={selectedSlot === 'Slot 4'} 

          onClick={(e) => { 

            e.preventDefault(); 

            handleSlotSelection('Slot 4'); 

          }} 

        /> */} 

</div> 

<button type="submit">Book Now</button> 

 </form> 

 
); 

}; 

 

export default AppointmentForm 