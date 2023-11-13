import { IconButton } from "@mui/material";
import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function CreateGroups() {
    return <div className="createGroups-container">
        
        <div className="create-group">

            <input className="input-area" placeholder="Create Group" />
            <IconButton>
                <AddCircleIcon />
            </IconButton>
    

        </div>

      


    </div>
}

export default CreateGroups;