import React, { useEffect, useState } from "react";
import { getRoutine } from "./api";

const Routines = () => {
    const [routine, setRoutine] = useState({});

    useEffect(async () => {
        const profile = await getRoutine();
        console.log("Routine profile test", profile)
        console.log(profile.data.messages)
        setctivity(profile);
    }, []);
    return (
        <>
        <h1>Welcome, {routine.data && routine.data.routinename} </h1>
        <div>
            {/* this is where we'll put the routines and activities and stuff */}
        </div>
        </>
    )
}
    export default Routines;