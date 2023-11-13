import React from "react";
import "./App.css";
import MainContainer from "./Components/MainContainer";
import { Route, Routes } from "react-router";
import Welcome from "./Components/Welcome"
import ChatArea from "./Components/ChatArea";
import Users from "./Components/Users";
import Groups from "./Components/Groups"
import CreateGroups from "./Components/CreateGroups";
import LandingPage from "./Components/Login";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />}></Route>
          <Route path="chat" element={<ChatArea />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="groups" element={<Groups  />}></Route>
          <Route path="create-groups" element={<CreateGroups  />}></Route>
        </Route>


      </Routes>


    </div>
  );
}

export default App;
