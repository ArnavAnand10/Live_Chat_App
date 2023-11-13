import React, { useState } from "react";
import "./myStyles.css";

// importing icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import ConversationsItem from "./ConvestationsItem";
import CreateGroups from "./CreateGroups";
import { useNavigate } from "react-router";



function SideBar(props) {

    const navigator = useNavigate();

    function createGroup(){
        console.log("called")
        props.changeScreen(<CreateGroups/>)
       
    }

    var [conversations, setConversations] = useState([

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
        {
            name: "Test#3",
            lastMessage: "Last Message #3",
            timeStamp: "today",
        },
        {
            name: "Test#3",
            lastMessage: "Last Message #3",
            timeStamp: "today",
        },
        {
            name: "Test#3",
            lastMessage: "Last Message #3",
            timeStamp: "today",
        },
        {
            name: "Test#3",
            lastMessage: "Last Message #3",
            timeStamp: "today",
        },

         {
            name: "Test#3",
            lastMessage: "Last Message #3",
            timeStamp: "today",
        },
        {
            name: "Test#3",
            lastMessage: "Last Message #3",
            timeStamp: "today",
        },
        {
            name: "Test#3",
            lastMessage: "Last Message #3",
            timeStamp: "today",
        },
        {
            name: "Test#3",
            lastMessage: "Last Message #3",
            timeStamp: "today",
        },
         {
            name: "Test#3",
            lastMessage: "Last Message #3",
            timeStamp: "today",
        },
        {
            name: "Test#3",
            lastMessage: "Last Message #3",
            timeStamp: "today",
        },

    ]);



    return <div className="side-bar-container">


        <div className="sb-header">

            <IconButton>
                <AccountCircleIcon />
            </IconButton>

            <div className="icon-group">

                <IconButton onClick={()=>navigator("users")}>
                    <PersonAddIcon />
                </IconButton> 

                <IconButton onClick={()=>navigator("groups")} >
                    <GroupAddIcon />
                </IconButton>

                <IconButton onClick={()=>navigator("create-groups")}>
                    <AddCircleIcon />
                </IconButton>

               
            </div>




        </div>


        <div className="sb-search">
            <IconButton>
                <SearchIcon />
            </IconButton>
            <input placeholder="search" />
        </div>

        <div className="sb-conversations">
            {conversations.map(conversation => <ConversationsItem key={conversation.name} props={conversation} />)}
        </div>
    </div>

}

export default SideBar;
