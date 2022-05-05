import React, { useEffect, useState } from "react";
import { createActivity } from "./api/api";

const ActivitiesForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    
return (
    <form id={"newActivitiesForm"} onSubmit={(event) =>{
        event.preventDefault()
        createActivity(name, description)
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

        {/* Description */}
        <label>Description</label>
        <input 
            type={"text"} 
            value={description}
            onChange={(event) => {
            setDescription(event.target.value)
                }}
        />

        <button>Submit</button>
    </form>
    )
}
export default ActivitiesForm;