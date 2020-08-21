import React,{useEffect,useState} from 'react';
import db from './firebase';
import firebase from 'firebase';
import SendIcon from '@material-ui/icons/Send';

function Chat(){
    const [input,setinput] = useState('');
    const [messages,setmessages] = useState([]);
    const [username,setusername]= useState([]);
    const [final,setfinal] = useState(['']);
    const time = firebase.firestore.FieldValue.serverTimestamp();

    useEffect(()=>{
        db.collection('messages').onSnapshot(snapshot=>{
            setmessages(snapshot.docs.map(doc=> doc.data().message));
        })
        db.collection('messages').onSnapshot(snapshot=>{
            setfinal(snapshot.docs.map(doc=> doc.data().timestamp));
        })

    },[])
    const addmessage = (event)=>{
        setmessages([...messages,input]);
        db.collection('messages').add({
            message : input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setinput('')
    }
    return(
        <div className="chatpage">
            <div className="chatheader">
                <h1 className="chatheader__h1">Meeting Chat</h1>

            </div>
            <div className="messagepage">
                  {messages.map(messageTobeSent=>(
                       <p className="chatmessage">{messageTobeSent}</p>
                  ))}

               </div>

            <div className="chatfooter">
                <input className="inputmessage" value={input}
                onChange={event=>setinput(event.target.value)}></input>
                <SendIcon fontSize="large" className="sendicon" onClick={addmessage}/>

               

            </div>

         </div>
          

    )
}
export default Chat;