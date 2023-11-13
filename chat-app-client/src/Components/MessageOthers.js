import React from "react";

function MessageOthers({props}){

    





   

        return <div className="other-message-container" >

        <div className="conversation-container">
            
        <p className="con-icon"> {props.name[0]}</p>

        <div className="other-text-content">
        
            <p>{props.message}</p>
            <p className="self-timeStamp">12:00 AM</p>
        </div>

             </div>



    </div>

    



   
}

export default MessageOthers;