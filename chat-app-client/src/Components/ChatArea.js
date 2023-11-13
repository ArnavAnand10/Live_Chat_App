import React from "react";
import "./myStyles.css";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";

function ChatArea() {

    var props1 = [{ name: "Random User", message: "Test Sample Text" },
    { name: "Random User", message: "Test Sample Text" },
    { name: "Random User", message: "Test Sample Text" }]

    return <div className="chatArea-container">

        <div className="chatArea-header">


            <p className="con-icon">{props1[0].name[0]}</p>


            <div className="header-text">
                <p className="header-title">{props1[0].name}</p>
                <p className="header-timeStamp">{props1[0].timeStamp}</p>
            </div>


            <IconButton>  <DeleteIcon />  </IconButton>



        </div>


        <div className="messages-container">


            <MessageOthers props={props1[0]} />
            <MessageSelf />


            <MessageSelf />
            <MessageOthers props={props1[0]} />
            <MessageOthers props={props1[0]} />
    
            <MessageSelf />
            <MessageSelf />
            <MessageOthers props={props1[0]} />

            <MessageSelf />
            <MessageSelf />
            <MessageSelf />


        </div>

        <div className="text-input-area">
            <input placeholder="Type a message..." />
            <IconButton>
                <SendIcon />
            </IconButton>
        </div>

    </div>


}

export default ChatArea;