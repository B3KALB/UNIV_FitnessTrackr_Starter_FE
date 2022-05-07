import React, { useState } from "react";
//import { boolean } from "yargs";
import { createRoutine } from "./api/api";

const RoutinesForm = () => {
    const [id, setId] = useState("");
    const [creatorId, setCreatorId] = useState("");
    const [isPublic, setIsPublic] = useState(false);
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");

return (
    <form id={"newRoutineForm"} onSubmit={(event) =>{
        event.preventDefault()
        createRoutine(id, creatorId, isPublic, name, goal)
    }}>
        {/* Id */}
        <label>Id</label>
        <input 
            type={"text"} 
            value={id}
            onChange={(event) => {
            setId(event.target.value)
                }}
        />

        {/* CreatorId */}
        <label>CreatorId</label>
        <input 
            type={"text"} 
            value={creatorId}
            onChange={(event) => {
            setCreatorId(event.target.value)
                }}
        />

        {/* IsPublic */}
        <label>IsPublic</label>
        <input 
            type={boolean} 
            // placeholder={false}
            value={isPublic}
            onChange={(event) => {
            setIsPublic(event.target.value)
                }}
        />

        {/* Name */}
        <label>Name</label>
        <input 
            type={"text"} 
            // placeholder={"Enter name"}
            value={name}
            onChange={(event) => {
            setName(event.target.value)
                }}
        />

        {/* Goal */}
        <label>Goal</label>
        <input 
            type={"text"} 
            // placeholder={"Enter goal"}
            value={goal}
            onChange={(event) => {
            setGoal(event.target.value)
                }}
        />
        <button>Submit</button>
    </form>
    )
}
export default RoutinesForm;


