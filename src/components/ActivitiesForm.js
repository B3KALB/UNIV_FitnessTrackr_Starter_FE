
// CHANGE TO A FORM FOR NEW ACTIVITIES ONCE USER IS LOGGED IN 

import React, { useState } from "react";
import { createActivity } from "./api";

const ActivitesForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [isPublic, setIsPublic] = useState(false);

return (
    <form id={"newActivitesForm"} onSubmit={(event) =>{
        event.preventDefault()
        createActivity(title, description, price, location)
    }}>
        {/* Title */}
        <label>Title</label>
        <input 
            type={"text"} 
            // placeholder={"Enter Title"}
            value={title}
            onChange={(event) => {
            setTitle(event.target.value)
                }}
        />

        {/* Description */}
        <label>Description</label>
        <input 
            type={"text"} 
            // placeholder={"Enter Description"}
            value={description}
            onChange={(event) => {
            setDescription(event.target.value)
                }}
        />

        {/* Price */}
        <label>Price</label>
        <input 
            type={"text"} 
            // placeholder={"Enter Price"}
            value={price}
            onChange={(event) => {
            setPrice(event.target.value)
                }}
        />

        {/* Location */}
        <label>Location</label>
        <input 
            type={"text"} 
            // placeholder={"Enter Location"}
            value={location}
            onChange={(event) => {
            setLocation(event.target.value)
                }}
        />
        <button>Submit</button>
    </form>
    )
}
export default ActivitesForm;