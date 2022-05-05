
// CHANGE OVER TO BE A FORM FOR NEW ROUTINES ONCE USER IS LOGGED IN 

import React, { useEffect, useState } from "react";
import { newPost } from "./api";

const PostForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [delivery, setDelivery] = useState(false);

return (
    <form id={"newPostForm"} onSubmit={(event) =>{
        event.preventDefault()
        newPost(title, description, price, location)
    }}>
        {/* Title */}
        <label>Title</label>
        <input 
            type={"text"} 
            value={title}
            onChange={(event) => {
            setTitle(event.target.value)
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

        {/* Price */}
        <label>Price</label>
        <input 
            type={"text"} 
            value={price}
            onChange={(event) => {
            setPrice(event.target.value)
                }}
        />

        {/* Location */}
        <label>Location</label>
        <input 
            type={"text"} 
            value={location}
            onChange={(event) => {
            setLocation(event.target.value)
                }}
        />
        <button>Submit</button>
    </form>
    )
}
export default PostForm;