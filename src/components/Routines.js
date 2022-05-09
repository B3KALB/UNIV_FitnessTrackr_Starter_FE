import React, { useEffect, useState } from "react";
import { getRoutines } from "./api/api";
import RoutinesForm from "./RoutinesForm"

const Routines = () => {
    const [routines, setRoutines] = useState([]);
    const token = localStorage.getItem("token");
    useEffect(async () => {
        const routines = await getRoutines();
        setRoutines(routines)
    }, []);
    return (
        <>
        <div id="forms">
            {token ? <RoutinesForm/> : <p>Please Log In to Create a New Routine</p>}
        </div>
        <div>
            {routines.map((routine) => {
                const {id, creatorName, name, goal, activities} = routine
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
        </div>
      </>
    );
};
export default Routines;