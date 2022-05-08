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
     alert("Error registering: please supply a valid username & password")
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
    console.error(error)
  }
}
// GET ROUTINES BY USER 
export const getRoutinesByUser = async () => {
  try{
    const response = await fetch(`${url}/users/:username/routines`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    })
    const userRoutines = await response.json()
    console.log(userRoutines)
    return userRoutines
  }catch(error){
    console.log(error)
  }
}
// GET ROUTINE BY ACTIVITY ID
export const getRoutinesByActivity = async () => {
  try{
    const response = await fetch(`${url}/routines/:activityId/routines`,{
    headers: {
      'Content-Type': 'application/json',
    }})
    const routinesByActivity = await response.json()
    console.log(routinesByActivity)
    return routinesByActivity
  }catch(error){
    console.error(error)
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
    return newActivity
  }catch(error){
    console.error(error)
  }
}
// CREATE NEW ROUTINE 
export const createRoutine = async (name, goal, isPublic) => {
  try{
    const response = await fetch(`${url}/routines`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
    return newRoutine 
    }catch(error){ 
      console.error(error) 
    }
}
// UPDATE ACTIVITY
export const updateActivity = async (name, description) => {
  try{
    const response = await fetch(`${url}/activities/:activityId`,{
      method: 'PATCH',
      body: JSON.stringify({
        name: name,
        description: description
      })
    })
    const updatedActivity = await response.json()
    console.log(updatedActivity)
    return updatedActivity
  }catch(error) {
    console.error(error)
  }
}
// UPDATE ROUTINE
export const updateRoutine = async (name, goal, isPublic) => {
  try{
    const response = await fetch(`${url}/routines/:routineId`,{
      method: 'PATCH',
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: true
      })
    })
    const updatedRoutine = await response.json()
    console.log(updatedRoutine)
    return updatedRoutine
  }catch(error){
    console.error(error)
  }
}
// ADD ACTIVITY TO ROUTINE
export const addActivity = async (activityId, count, duration) => {
  try{
    const response = await fetch(`${url}/routines/:routineId/activities`,{
      method: 'POST',
      body: JSON.stringify({
        activityId: activityId,
        count: count,
        duration: duration
      })
    })
    const addedActivity = await response.json()
    console.log(addedActivity)
  }catch(error){
    console.error(error)
  }
}
// UPDATE COUNT OR DURATION ON ROUTINE ACTIVITY
export const updateRoutineActivities = async (count, duration)=> {
  try{
    const response = await fetch(`${url}/routine_activities/:routineActivityId`,{
      method: 'PATCH',
      body: JSON.stringify({
        count: count,
        duration: duration
      })
    })
    const newRoutineActivity = await response.json()
    console.log(newRoutineActivity)
  }catch(error){
    console.error(error)
  }
}
// DELETE ROUTINE
export const deleteRoutine = async () => {
  try{
    const response = await fetch(`${url}/routines/:routineId`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      },
    })
    const deletedRoutine = await response.json()
    console.log(deletedRoutine)
    alert("Routine deleted.")
  }catch(error){
    console.error(error)
  }
}
// DELETE ACTIVITY FROM ROUTINE
export const deleteActivity = async () => {
  try{
    const response = await fetch(`${url}/routine_activities/:routineActivityId`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      },
    })
    const deletedActivity = await response.json()
    console.log(deletedActivity)
    alert("Activity deleted.")
  }catch(error){
    console.error(error)
  }
}












