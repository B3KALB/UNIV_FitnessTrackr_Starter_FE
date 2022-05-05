import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom"
import Routines from "./Routines"
import Activities from "./Activities"
import Home from "./Home"
import ActivitiesForm from "./ActivitiesForm"
import RoutinesForm from "./RoutinesForm"
import UserProfile from "./UserProfile"

const App = (props) => {
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
                    <Link to="/RoutinesForm">New Routine Form</Link>
                    <Link to="/ActivitiesForm">New Activity Form</Link>
                </div>
                <Route path="Activities">
                    <Activities/>
                </Route>
                <Route path="Routines">
                    <Routines/>
                </Route>
                <Route path="Home">
                    <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                </Route>
                <Route path="/ActivitiesForm">
                   {isLoggedIn ? <ActivitiesForm/> : <p>Please Log In to Create a New Activity</p>}
                </Route>
                <Route path="/RoutinesForm">
                   {isLoggedIn ? <RoutinesForm/> : <p>Please Log In to Create a New Routine</p>}
                </Route>
                
            
            </>
        </BrowserRouter>
    )
}










export default App