import { Navigate,Outlet, useNavigate } from "react-router-dom"
import useAuthenticated from "../hooks/useAuthenticated"
import { useEffect } from "react"
import useStorage from "../hooks/useStorage"


const ProtectedRoute=({})=>{
    const navigate = useNavigate()
    const {removeToken,checkIsAuthenticated} = useAuthenticated()
    const {loggedInUser,clearUserData,fetchUserData} = useStorage()
    useEffect(()=>{
    // saveToken(new Date(Date.now()+2*1000).getTime())
    },[])

    // console.log(new Date().getTime(),new Date(Date.now()+2*1000).getTime())

    const handleSignOut=()=>{
        removeToken()
        clearUserData()
        navigate("/")

    }
    console.log(fetchUserData())
    if(!checkIsAuthenticated()){
        console.log("hereeeeeeeeeeeeee")
        return (<Navigate to="/" replace />)
    }
    return(
        <div className="weather-conatiner">
        <div className="flex">
        <p>Hi {loggedInUser},</p>
        <button className="ml-auto" onClick={handleSignOut}>Sign out</button>
        </div>
        <Outlet/>
        </div>
    )
}

export default ProtectedRoute