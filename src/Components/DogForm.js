import React, {useState} from 'react';

function DogForm(props) {   
    const [appointment, setAppointment] = useState(
       {  
          type: '',
          status: '',
          date: '',
          time: '',
          clientId: '',  
       }
    );

    function handleChange(event) {
      const { name, value } = event.target;
      if (name === "type")
         setAppointment({...appointment, type: value});
      else if(name === "status")
        setAppointment({...appointment, status: value});
      else if(name === "date"){
        setAppointment({...appointment, date: value});
      }else if(name === "time"){
        setAppointment({...appointment, time: value});
      }else{
        setAppointment({...appointment, clientId: value});
      }
    }
  
    function submitForm() {
      props.handleSubmit(appointment);
      setAppointment({  
        type: '',
        status: '',
        date: '',
        time: '',
        clientId: '',  
     });
    }

    
  return (
    <div>
      <form>
        <label htmlFor="type">Type</label>
        <input
          type="text"
          name="type"
          id="type"
          value={appointment.type}
          onChange={handleChange} />
        <label htmlFor="status">Status</label>
        <input
          type="text"
          name="status"
          id="status"
          value={appointment.status}
          onChange={handleChange} />
        <label htmlFor="date">Date</label>
        <input
          type="text"
          name="date"
          id="date"
          value={appointment.date}
          onChange={handleChange} />
        <label htmlFor="time">Time</label>
        <input
          type="text"
          name="time"
          id="time"
          value={appointment.time}
          onChange={handleChange} />
        <label htmlFor="clientId">Client ID</label>
        <input
          type="text"
          name="clientId"
          id="clientId"
          value={appointment.clientId}
          onChange={handleChange} />
        <input type="button" value="Submit" onClick={submitForm} />
      </form>
    </div>
); 
}

export default DogForm;