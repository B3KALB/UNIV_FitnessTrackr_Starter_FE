import React, { useState } from "react";
import { createActivity } from "./api/api";

const ActivitiesForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("")

return (
    <form class="activityForm" id={"newActivitesForm"} onSubmit={(event) =>{
        event.preventDefault()
        try {
            createActivity(name, description)
        } catch(error){
            setError(error);
        }

    }}>

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

        {/* Description */}
        <label>Description</label>
        <input 
            type={"text"} 
            // placeholder={"Enter description"}
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
