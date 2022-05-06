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

    if(token){
        return (
          <>
            <ActivitiesForm />
          </>
        )
    }

    return (
        <div>
            {activities.map((activity) => {
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