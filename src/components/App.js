import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Routines from "./Routines"
import Activities from "./Activities"
import Home from "./Home"
import UserProfile from "./UserProfile"

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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
                    <Route path="/Activities" element={<Activities/>}/>
                    <Route path="/Routines" element={<Routines/>}/>
                    <Route path="/Home" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
                    <Route path="/UserProfile" element={<UserProfile/>}/>
                </Routes>
            </>
        </BrowserRouter>
    )
}










export default App