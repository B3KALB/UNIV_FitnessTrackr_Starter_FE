const MyRoutines = () => {
   const token = localStorage.getItem("token");
   if(!token){
       return;
   }

   return (
       <div>Routines</div>
   )
}