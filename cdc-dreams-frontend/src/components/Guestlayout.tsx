import { Outlet } from "react-router-dom"
import { useStateContext } from "../context/useStateContext";
import { Navigate } from "react-router-dom";

const Guestlayout = () => {
   const {token} = useStateContext();

   //if the token is authenticated Aand the user is trying to access any page part of the guestlayout
   //he/she will be redirected to Users for now
   if(token){
     return <Navigate to='/'/>
   }

  return (
    <>
      <div>
        <h1>Guest layout</h1>
        <Outlet/>
      </div>
    </>
  )
}

export default Guestlayout
