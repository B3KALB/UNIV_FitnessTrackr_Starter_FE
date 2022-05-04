import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom"
import Routines from "./Routines"
import Activities from "./Activities"
import Home from "./Home"


const App = (props) => {


    return (
        <BrowserRouter>
            <>
                <h1>Welcome to Fitness Tracker</h1>
                <div id="navbar">
                    <Link to="/Home">Home</Link>
                    <Link to="/Activities">Activities</Link>
                    <Link to="/Routines">Routines</Link>
                </div>
                <Route path="Activities">
                    <Activities/>
                </Route>
                <Route path="Routines">
                    <Routines/>
                </Route>
                <Route path="Home">
                    <Home/>
                </Route>

            
            </>
        </BrowserRouter>
    )
}










export default App