import React from 'react';
import './App.css';
import Chat from './chat';
import Sidebar from './sidebar';

function Meeting(){
    return(
        <div>
        <div className="App">
              <div className="Appbody">
                <Sidebar/>
                <Chat/>
               
             </div>
           
          </div>
    
        </div>

    )
};
export default Meeting;