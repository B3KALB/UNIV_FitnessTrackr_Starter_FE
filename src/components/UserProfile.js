import React, { useEffect, useState } from "react";
import {getUser, getRoutines, getRoutinesByUser} from "./api/api"

const UserProfile = () => {
    const token = localStorage.getItem("token");
    const [user, setUser] = useState({});
    // const [myRoutines, setMyRoutines] = useState([])
    const [routines, setRoutines] = useState([]);
    

    useEffect(async () => {
        const routines = await getRoutines();
        setRoutines(routines)
    }, []);
    
    useEffect(async () => {
        const user = await getUser();
        console.log("current user:", user)
        setUser(user);
    }, []);
    console.log(user.username)
    const username = user.username
    const userRoutines = getRoutinesByUser(username)
    
    /* below just shows all the routines & activities; 
    I could not figure out how to get user profile to only show the user's routines
    and thus ran out of time for everything else too */
    return (
        <div>
            {token ? <div>
                {routines.map((routine) => {
                    const {id, creatorId, creatorName, name, goal, activities} = routine
                    return(
                        <div id="cardStyle" key={id}>
                        <p>{creatorName}</p>
                        <p>Name:{name}</p>
                        <p>Goal:{goal}</p>
                        <div>Activities for this Routine:
                            {activities.map(activity =>{
                                const {id, name, description, duration, count} = activity;
                                return(
                                    <div key={id} id="routineActivities">
                                        <div>Name:{name}</div>
                                        <div>{description}</div>
                                        <div>Reps:{count}</div>
                                        <div>Sets:{duration}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                );
            })}
            </div> : <p>Please Log In to view your profile</p>}
        </div>
        )
    }
    // useEffect(async ()=>{
    //     const myRoutines = await getRoutinesByUser(user.id)
    //     console.log("current user's routines:", myRoutines)
    //     setMyRoutines(myRoutines)
    // }, []);

    // console.log(myRoutines)
    
    export default UserProfile
    
    /* for each routine which is owned by me I should
    
    be able to update the name and goal for the routine
    be able to delete the entire routine
    be able to add an activity to a routine via a small form which has a dropdown for all activities, an inputs for count and duration
    be able to update the duration or count of any activity on the routine
    be able to remove any activity from the routine */