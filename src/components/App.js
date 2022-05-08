import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Routines from "./Routines"
import Activities from "./Activities"
import ActivitiesForm from "./ActivitiesForm";
import RoutinesForm from "./RoutinesForm";
import Home from "./Home"
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
                <div id="navbar">
                    <Link to="/Home">Home</Link>
                    <Link to="/Activities">Activities</Link>
                    <Link to="/Routines">Routines</Link>
                    <Link to="/UserProfile">My Profile </Link>
                </div>
                <Routes>
                <Route path="/UserProfile" element={isLoggedIn ? <UserProfile/>: <p>Please Log In to See Your Profile</p>} />
                <Route path="/activities" element={<Activities/>} />
                <Route path="Routines" element={<Routines />} />
                <Route path="Home" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
                <Route path="/ActivitiesForm" element={isLoggedIn ? <ActivitiesForm/> : <p>Please Log In to Create a New Activity</p>} />
                <Route path="/RoutinesForm" element={isLoggedIn ? <RoutinesForm/> : <p>Please Log In to Create a New Routine</p>} />

                </Routes>
            </>
        </BrowserRouter>
    )
}

export default App