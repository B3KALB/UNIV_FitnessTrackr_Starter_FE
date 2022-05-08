const url = 'https://fitnesstrac-kr.herokuapp.com/api'

// REGISTER 
export const register = async (username, password) => { 
    try{ 
      const response  = await fetch(`${url}/users/register`, {
        method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
       username: username,
       password: password
     }
   )})
   const data = await response.json()
   console.log("response: ", data);
   localStorage.setItem("token", data.token)
   localStorage.setItem("curUser", username);
 } catch (error){
     console.error(error)
     alert("Error registering: please supply a valid username or password")
 }
 } 
//  LOGIN
export const login = async (username, password) => {  
  try{ const response  = await fetch(`${url}/users/login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
     username: username,
     password: password
 })})
 const data = await response.json()
 console.log(data)
 localStorage.setItem("token", data.token);
 return data
} catch (error){
   console.error(error)
   alert("Error logging in: incorrect username or password")
}
} 
// GET USER 
export const getUser = async () => {
  try { 
   const response = await fetch(`${url}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      },
    })
    const data =  await response.json()
    return data;
  
  } catch (error) {
    console.error(error)
  }
}
// GET ALL ACTIVITIES
export const getAllActivities = async () => {
  try{
    const response = await fetch(`${url}/activities`, {
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const allActivities = await response.json()
    return allActivities
  }catch(error){
    console.error(error) 
  }
}
// GET ALL ROUTINES 
export const getRoutines = async () => {
  try {
    const response = await fetch(`${url}/routines`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    const routines = await response.json();
    return routines;
    
  }catch(error){
    
  }
}
// CREATE NEW ACTIVITY 
export const createActivity = async (name, description) => {
  try{
    const response = await fetch(`${url}/activities`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        name: name,
        description: description
      }),
    })
    const newActivity = await response.json()
    console.log(newActivity)
    alert("a new activity has been successfully created")
    return newActivity
  }catch(error){
    return error;
  }
}
// CREATE NEW ROUTINE 
export const createRoutine = async (name, goal, isPublic) => {
  try{
    const response = await fetch(`${url}/routines`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          name: name,
          goal: goal,
          isPublic: true
        })
      })
    const newRoutine = await response.json() 
    console.log(newRoutine) 
    alert("a new routine has been successfully created")
    return newRoutine 
    }catch(error){ 
      console.error(error) 
    }
}