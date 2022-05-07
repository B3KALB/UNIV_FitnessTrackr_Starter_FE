import React, { useEffect, useState } from "react";
import {getUser} from "./api/api"
import MyRoutines from "./MyRoutines"

const UserProfile = () => {
    const [user, setUser] = useState({});
    const token = localStorage.getItem("token");

    useEffect(async () => {
        const profile = await getUser();
        console.log("user profile:", profile)
        setUser(profile);
    }, []);
    return (
        
        <div>
            {token ? <MyRoutines/> : <p>Please Log In to view your User Profile</p>}
        </div>
        
    )
}

export default UserProfile