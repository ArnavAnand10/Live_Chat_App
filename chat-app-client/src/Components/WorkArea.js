import React from "react";

import "./myStyles.css";
import ChatArea from "./ChatArea";


function WorkArea() {

    var conversations = [

        {
            name: "Test#1",
            lastMessage: "Last Message #1",
            timeStamp: "today",
        },
        {
            name: "Test #2",
            lastMessage: "Last Message #2",
            timeStamp: "today",
        },
        {
            name: "Test#3",
            lastMessage: "Last Message #3",
            timeStamp: "today",
        },

    ];

    return <div className="work-area-container">
        <ChatArea props={conversations[0]} />
    </div>
}

export default WorkArea;