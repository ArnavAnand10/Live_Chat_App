import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import { AnimatePresence, motion } from 'framer-motion';


function Groups() {
    return (

        <AnimatePresence  >

            <motion.div initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ease:"anticipate",
            duration:"0.2"}}
                className="list-container">



                <div className="sb-search">
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <h2 className="con-title">Available Groups</h2>
                </div>


                <div className="sb-search">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <input placeholder="search for available groups" />
                </div>



                <div className="ug-list">

                    <motion.div whileHover={{ scale: "1.01" }} whileTap={{ scale: "0.98" }} className="list-item">
                        <p className="con-icon">T</p>
                        <p className="con-title">Test User #1</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: "1.01" }} whileTap={{ scale: "0.98" }} className="list-item">
                        <p className="con-icon">T</p>
                        <p className="con-title">Test User #1</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: "1.01" }} whileTap={{ scale: "0.98" }} className="list-item">
                        <p className="con-icon">T</p>
                        <p className="con-title">Test User #1</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: "1.01" }} whileTap={{ scale: "0.98" }} className="list-item">
                        <p className="con-icon">T</p>
                        <p className="con-title">Test User #1</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: "1.01" }} whileTap={{ scale: "0.98" }} className="list-item">
                        <p className="con-icon">T</p>
                        <p className="con-title">Test User #1</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: "1.01" }} whileTap={{ scale: "0.98" }} className="list-item">
                        <p className="con-icon">T</p>
                        <p className="con-title">Test User #1</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: "1.01" }} whileTap={{ scale: "0.98" }} className="list-item">
                        <p className="con-icon">T</p>
                        <p className="con-title">Test User #1</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: "1.01" }} whileTap={{ scale: "0.98" }} className="list-item">
                        <p className="con-icon">T</p>
                        <p className="con-title">Test User #1</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: "1.01" }} whileTap={{ scale: "0.98" }} className="list-item">
                        <p className="con-icon">T</p>
                        <p className="con-title">Test User #1</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: "1.01" }} whileTap={{ scale: "0.98" }} className="list-item">
                        <p className="con-icon">T</p>
                        <p className="con-title">Test User #1</p>
                    </motion.div>







                </div>

            </motion.div>
        </AnimatePresence>
    )
}

export default Groups