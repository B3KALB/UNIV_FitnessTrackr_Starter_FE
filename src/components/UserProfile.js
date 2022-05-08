import React, { useEffect, useState } from "react";
import {getUser} from "./api/api"


const UserProfile = () => {
    const [user, setUser] = useState({});
  

    useEffect(async () => {
        const profile = await getUser();
        console.log("user profile:", profile)
        setUser(profile);
    }, []);
    return (
        <>
        <h1>Welcome, {user.data && user.data.username} </h1>
        <div>
           
        </div>
        </>
    )
}

export default UserProfile