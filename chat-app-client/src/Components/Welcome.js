import React from "react";
import welcome from "./welcome.png";
function Welcome(){
    return <div className="welcome-container">

            <img src={welcome}></img>
            <p className="welcome-text">Enter the Chatverse: Where Connections Begin !</p>

    </div>
}

export default Welcome;