import React, { useEffect, useState } from "react";
import {getAllActivities} from "./api"

const Activities = () => {
    const [activity, setActivity] = useState({});

    useEffect(async () => {
        const profile = await getAllActivities();
        console.log("Activity profile test", profile)
        console.log(profile.data.messages)
        setActivity(activity)
        
    }, []);

    return (
        <div style={''}>
            {profile.map((activity) => {
                return(
                    <div key={activity.id}>
                        <p>{activity.name}</p>
                        <p>{activity.description}</p>
                    </div>
                );
            })}
        </div>
    );
};
    export default Activities;