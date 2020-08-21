import React,{useState,useEffect} from 'react';
import db from './firebase'
import Avatar from '@material-ui/core/Avatar';
import ReportIcon from '@material-ui/icons/Report';
function Sidebar(){
    const [users,setusers] =  useState([]) ;
    const [meetingname,setmeetingname] = useState()

    useEffect(()=>{
        db.collection('users').onSnapshot(snapshot=>{
            setusers(snapshot.docs.map(doc=> doc.data().user));
        })
        db.collection('meetings').onSnapshot(snapshot=>{
            setmeetingname(snapshot.docs.map(doc=> doc.data().meetingname));
        })
    })
    return(
        <div className="sidebar">
            <div className="sidebar__header">
            <h1 className="sidebar__meetingname">{meetingname}</h1>
            </div>
            <div className="users">
                <h1 className="users__h1">Participants</h1>
                {users.map(user=>(
                   <div className="user">
                    <div className="avatar">
                        <br></br>
                        <Avatar src="https://avatars.dicebear.com/api/human/123.svg" className="avatar123" />
                    </div>
                    <div className="username">
                      <h1 className="user__name">{user}</h1>
                    </div>
                 </div>
                    ))}

            </div>
         </div>

    )
  }
export default Sidebar;