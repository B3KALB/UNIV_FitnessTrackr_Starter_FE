
// CHANGE TO A FORM FOR NEW ACTIVITIES ONCE USER IS LOGGED IN 
import React, { useState } from "react";
import { createActivity } from "./api";

const ActivitesForm = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

return (
    <form id={"newActivitesForm"} onSubmit={(event) =>{
        event.preventDefault()
        createActivity(id, name, location)
    }}>
        {/* Id */}
        <label>Id</label>
        <input 
            type={"text"} 
            // placeholder={"Enter id"}
            value={id}
            onChange={(event) => {
            setId(event.target.value)
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
export default ActivitesForm;