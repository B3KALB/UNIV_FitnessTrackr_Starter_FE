import React, { useEffect, useState } from "react";
import {getAllActivities} from "./api/api";
import ActivitiesForm from './ActivitiesForm';


const cardStyle = {
    backgroundColor: 'blue',
    color: '#CCC',
    padding: '20px',
    margin: '20px'
}

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(async () => {
        if(!token){
            const activities = await getAllActivities();
            setActivities(activities);
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
            {activities.map( activity => {
                return(
                    <div style={cardStyle} key={activity.id}>
                        <p>Name: {activity.name}</p>
                        <p>Description: {activity.description}</p>
                    </div>
                );
            })}
        </div>
    );
};
    export default Activities;