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
                return(
                    <div key={routine.id}>
                        <p>{routine.creatorName}</p>
                        <p>Public/Private:{routine.isPublic}</p>
                        <p>Name:{routine.name}</p>
                        <p>Goal:{routine.goal}</p>
                    </div>
                );
            })}
        </div>
      </>
    );
};
    export default Routines;