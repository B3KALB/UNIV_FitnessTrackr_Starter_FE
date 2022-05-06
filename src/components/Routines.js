import React, { useEffect, useState } from "react";
import { getRoutines } from "./api/api";

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
                <div key={routine.id}>
                    <p>{routine.creatorId}</p>
                    <p>{routine.isPublic}</p>
                    <p>{routine.name}</p>
                    <p>{routine.goal}</p>
                </div>
            );
        })}
      </div>
    );
};
    export default Routines;