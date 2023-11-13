import React from "react";


function MessageSelf(){
    var props2 = {name: "You", message:"Test Sample Text"}
    return <div className="self-message-container" >

        <div className="messageBox">
            

           
            <p>{props2.message}</p>
            <p className="self-timeStamp">12:00 </p>
     

             </div>



    </div>
}   


export default MessageSelf;