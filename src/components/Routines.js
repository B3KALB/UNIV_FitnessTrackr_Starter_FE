import React, { useEffect, useState } from "react";
import { getRoutines } from "./api/api";

const cardStyle = {
    backgroundColor: 'limegreen',
    color: 'black',
    padding: '20px',
    margin: '20px'
}

const Routines = () => {
    const [routines, setRoutines] = useState([]);

    useEffect(async () => {
        const routines = await getRoutines();
        setRoutines(routines)

        //console.log("Routine profile test", profile)
        //console.log(profile.data.messages)
    }, []);

    return (
      <div>
        {routines.map((routine) => {
            return(
                <div style={cardStyle} key={routine.id}>
                    <p>Creator Id: {routine.creatorId}</p>
                    <p>Is public: {routine.isPublic}</p>
                    <p>Name: {routine.name}</p>
                    <p>Goal: {routine.goal}</p>
                </div>
            );
        })}
      </div>
    );
};
    export default Routines;