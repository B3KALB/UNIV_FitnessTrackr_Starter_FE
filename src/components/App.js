import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Routines from "./Routines"
import Activities from "./Activities"
import Home from "./Home"
import ActivitiesForm from "./ActivitiesForm"
import RoutinesForm from "./RoutinesForm"
import UserProfile from "./UserProfile"
import MyRoutines from "./MyRoutines";

const App = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
      const validToken = localStorage.getItem("token")
      if(validToken) setIsLoggedIn(true)
    }, []);


    return (
        <BrowserRouter>
            <>
                <h1>Welcome to Fitness Tracker</h1>
                <div id="navbar" class="navbar">
                    <div>
                      <Link to="/Home">Home</Link>
                    </div>
                    <div class="navbar_link">
                        <Link to="/Activities">Activities</Link>
                    </div>
                    <div class="navbar_link">
                    <Link to="/Routines">Routines</Link>
                    </div>
                    <div class="navbar_link">
                    <Link to="/RoutinesForm">New Routine Form</Link>
                    </div>
                    <div class="navbar_link">
                    <Link to="/ActivitiesForm">New Activity Form</Link>
                    </div>
                    <div class="navbar_link">
                      <Link to="/MyRoutine">My Routines </Link>
                    </div>
                </div>
                <Routes>
                <Route path="/MyRoutine" element={<MyRoutines />} />
                <Route path="/activities" element={<Activities/>} />
                <Route path="Routines" element={<Routines />} />
                <Route path="Home" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
                <Route path="/ActivitiesForm" element={isLoggedIn ? <ActivitiesForm/> : <p>Please Log In to Create a New Activity</p>} />
                <Route path="/RoutinesForm" element=
                   {isLoggedIn ? <RoutinesForm/> : <p>Please Log In to Create a New Routine</p>} />

                </Routes>
            
            </>
        </BrowserRouter>
    )
}










export default App