import React, { useEffect, useState } from "react";
import {getAllActivities} from "./api/api";
import ActivitiesForm from './ActivitiesForm';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const token = localStorage.getItem("token");
    useEffect(async () => {
        if(!token){
            const activities = await getAllActivities();
            setActivities(activities)
        }     
    }, []);

    return (
        <div id="forms">
            {token ? <ActivitiesForm/> :
        (<div>
            {activities.map((activity) => {
                return(
                    <div key={activity.id}>
                        <p>Name:{activity.name}</p>
                        <p>Description:{activity.description}</p>
                    </div>
                );
            })}
        </div>)}
        </div>
    );
};
    export default Activities;