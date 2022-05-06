import React, { useEffect, useState } from "react";
import {getUser} from "./api/api"

const UserProfile = () => {
    const [user, setUser] = useState({});

    useEffect(async () => {
        const profile = await getUser();
        console.log("user profile test", profile)
        console.log(profile.data.messages)
        setUser(profile);
    }, []);
    return (
        <>
        <h1>Welcome, {user.data && user.data.username} </h1>
        <div>
            {/* this is where we'll put the user's routines and activities and stuff */}
        </div>
        </>
    )
}

export default UserProfile