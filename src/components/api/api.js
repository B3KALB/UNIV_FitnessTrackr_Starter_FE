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