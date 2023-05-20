import { UserButton } from "@clerk/clerk-react";
import {useSession} from "@clerk/clerk-react"
import { Navigate } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
import Employees from "../Employees/Employees"



function ProtectedPage(){
    const {session} = useSession()
    if(!session?.user){
        return <Navigate to='/'/>
    }
    return(
        <>
        <Employees/>
        <Analytics/>
        <Settings/>
        </>
    )
}

export default ProtectedPage