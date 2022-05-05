import React, { useEffect, useState } from "react";
import { getRoutine } from "./api";

const Routines = () => {
    const [routine, setRoutine] = useState({});

    useEffect(async () => {
        const profile = await getRoutine();
        setRoutine(routine)

        console.log("Routine profile test", profile)
        console.log(profile.data.messages)
    }, []);
    return (
        <div style={''}>
        {profile.map((routine) => {
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