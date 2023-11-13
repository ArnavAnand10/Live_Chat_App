import React, { useState } from "react";
import "./myStyles.css";
import SideBar from "./SideBar";

import { Outlet, useNavigate } from "react-router";





function MainContainer() {


    return <div className="main-container">

        <SideBar changeScreen={null} />
        {/* <Welcome/>
        <CreateGroups/> */}
        {/* <ChatArea/> */}
        <Outlet />

    </div>
}

export default MainContainer;