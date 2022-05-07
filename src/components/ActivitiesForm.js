import React, { useState } from "react";
import { createActivity } from "./api/api";

const ActivitiesForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("")

return (
    <form id={"newActivitesForm"} onSubmit={(event) =>{
        event.preventDefault()
        createActivity(name, description)
    }}>New Activity:

        <label>Name</label>
        <input 
            type={"text"} 
            value={name}
            onChange={(event) => {
            setName(event.target.value)
                }}
        />
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
