import React,{useState,useEffect}from 'react';
import './App.css';
import db from './firebase'

function Login(){
    const [usernameinput,setusernameinput] = useState('');
    const [meetingnameinput,setmeetingnameinput] = useState('');

    const addfirebaseusername = (event)=>{
        db.collection('users').add({
            user : usernameinput
            
        })
        db.collection('meetings').add({
            meetingname : meetingnameinput
        })
    }

    return(
      <div>
         <input className="usernameinput" placeholder="Enter a username"  value={usernameinput} onChange={event=>setusernameinput(event.target.value)}></input>
         <br></br>
         <input className="meetingnameinput" placeholder="Create a meeting name(optional)" value={meetingnameinput} onChange={event=>setmeetingnameinput(event.target.value)}></input>
         <br></br>
         <input className="meetingpassword" placeholder="Create a meeting password(optional)" type="password"></input>
         <br></br>
         <button className="saveprofile" onClick={addfirebaseusername}>Save profile</button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <a className="join" href="/meeting">Join Meeting</a>
      </div>
    )
}
export default Login;