import React, { useEffect, useState } from "react";
import {getAllActivities} from "./api/api";
import ActivitiesForm from './ActivitiesForm';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const token = localStorage.getItem("token");
    useEffect(async () => {
        const activities = await getAllActivities();
        setActivities(activities)
    }, []);

    return (
        <>
        <div id="forms">
            {token ? <ActivitiesForm/> : <p>Please Log In to Create a New Activity</p>}
        </div>
        <div>
            {activities.map((activity) => {
                return(
                    <div id="cardStyle" key={activity.id}>
                        <p>Name:{activity.name}</p>
                        <p>Description:{activity.description}</p>
                    </div>
                );
            })}
        </div>
        </>
    );
};
    export default Activities;