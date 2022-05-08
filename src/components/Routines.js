import React, { useEffect, useState } from "react";
import { getRoutines } from "./api/api";
import RoutinesForm from "./RoutinesForm"

const cardStyle = {
    backgroundColor: 'limegreen',
    color: 'black',
    padding: '20px',
    margin: '20px'
}

const Routines = () => {
    const [routines, setRoutines] = useState([]);
    const token = localStorage.getItem("token");
    useEffect(async () => {
        const routines = await getRoutines();
        setRoutines(routines)
        console.log(routines)
    }, []);
    // const {activities: [name, description, duration, count]} = routines
    return (
        <>
        <div id="forms">
            {token ? <RoutinesForm/> : <p>Please Log In to Create a New Routine</p>}
        </div>
        <div>
            {routines.map((routine) => {
                return(
                    <div id="cardStyle" style={cardStyle} key={routine.id}>
                        <p>{routine.creatorName}</p>
                        <p>Public/Private:{routine.isPublic}</p>
                        <p>Name:{routine.name}</p>
                        <p>Goal:{routine.goal}</p>
                        {/* for each routine also need the activity 
                        name, description, duration & count */}
                        {/* <p>Activities:{routine.activities}</p> */}
                    </div>
                );
            })}
        </div>
      </>
    );
};
export default Routines;