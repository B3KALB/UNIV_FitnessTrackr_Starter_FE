const url = 'https://fitnesstrac-kr.herokuapp.com/'

// REGISTER 
export const register = async (username, password) => {  
    try{ const response  = await fetch(`${url}/users/register`, {
   method: "POST",
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({
     user: {
       username: username,
       password: password
     }
   })})
   const data = await response.json()
   console.log(data)
   localStorage.setItem("token", data.data.token)
 } catch (error){
     console.error(error)
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
     user: {
       username: username,
       password: password
     }
   })})
   const data = await response.json()
   console.log(data)
   localStorage.setItem("token", data.data.token);
 console.log(data.data.token)
 } catch (error){
     console.error(error)
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

// ALL ACTIVITIES
export const getAllActivities = async () => {
  try{
    const response = await fetch(`${url}/activities`, {
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const allActivities = await response.json()
    console.log(allActivities)
    return allActivities
  }catch(error){
    console.error(error) 
  }
}

// CREATE NEW ACTIVITY 
export const creatActivity = async (name, description) => {
  try{
    const response = await fetch(`${url}/activities`, {
      method: 'POST', 
      body: JSON.stringify({
        name: name,
        description: description
      })
    })
    const newActivity = await response.json()
    console.log(newActivity)
    return newActivity
  }catch(error){
    console.error(error)
  }
}

