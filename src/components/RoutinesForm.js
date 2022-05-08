import React, { useState } from "react";
import { createRoutine } from "./api/api";

const RoutinesForm = () => {
    const [isPublic, setIsPublic] = useState(false);
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");

return (
    <form id={"newRoutineForm"} onSubmit={(event) =>{
        event.preventDefault()
        createRoutine(name, goal, isPublic)
    }}>New Routine:
        <label>Name</label>
        <input 
            type={"text"} 
            value={name}
            onChange={(event) => {
            setName(event.target.value)
                }}
        />
        <label>Goal</label>
        <input 
            type={"text"} 
            value={goal}
            onChange={(event) => {
            setGoal(event.target.value)
                }}
        />
        <label>IsPublic</label>
        <input 
            type={"checkbox"} 
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