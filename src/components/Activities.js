import React, { useEffect, useState } from "react";
import {getAllActivities} from "./api"

const Activities = () => {
    const [activity, setActivity] = useState({});

    useEffect(async () => {
        const profile = await getAllActivities();
        console.log("Activity profile test", profile)
        console.log(profile.data.messages)
        setctivity(profile);
    }, []);
    return (
        <>
        <h1>Welcome, {activity.data && activity.data.activityname} </h1>
        <div>
            {/* this is where we'll put the ctivity's routines and activities and stuff */}
        </div>
        </>
    )
}
    export default Activities;