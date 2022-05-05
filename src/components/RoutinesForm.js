import React, { useEffect, useState } from "react";
import { createRoutine } from "./api/api";

const RoutinesForm = () => {
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    const [isPublic, setIsPublic] = useState(true);

return (
    <form id={"newRoutinesForm"} onSubmit={(event) =>{
        event.preventDefault()
        createRoutine(name, goal, isPublic)
    }}>
        {/* Name */}
        <label>Name</label>
        <input 
            type={"text"} 
            value={name}
            onChange={(event) => {
            setName(event.target.value)
                }}
        />

        {/* Goal */}
        <label>Goal</label>
        <input 
            type={"text"} 
            value={goal}
            onChange={(event) => {
            setGoal(event.target.value)
                }}
        />

        {/* isPublic */}
        <label>Public or Private</label>
        <input 
            type={"boolean"} 
            value={isPublic}
            onChange={(event) => {
            setIsPublic(event.target.value)
                }}
        />

        <button>Submit</button>
    </form>
    )
}
export default RoutinesForm;