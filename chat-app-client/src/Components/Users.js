import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import { AnimatePresence,motion } from "framer-motion";


function Users() {
    return (
    
    <AnimatePresence >

   
    <motion.div initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ease:"anticipate",
            duration:"0.2"}} className="list-container">


        <div className="sb-search">
            <IconButton>
                <ChatIcon />
            </IconButton>
            <h2 className="con-title">Online Users</h2>
        </div>


        <div className="sb-search">
            <IconButton>
                <SearchIcon />
            </IconButton>
            <input placeholder="search for available users" />
        </div>



        <div className="ug-list">
            
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User #1</p>
            </div>

            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User #1</p>
            </div>

            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User #1</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User #1</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User #1</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User #1</p>
            </div>  <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User #1</p>
            </div>  <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User #1</p>
            </div>  <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User #1</p>
            </div>

        </div>

    </motion.div>
    </AnimatePresence>
    )
}

export default Users