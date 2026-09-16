import { useState } from "react"


const useStorage=()=>{

    const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem("loggedInUser") || "")

    const saveUserData=(data)=>{
        localStorage.setItem("loggedInUser",data)
        setLoggedInUser(data)
    }

    const clearUserData=()=>{
        localStorage.removeItem("loggedInUser")
    }

    const fetchUserData=()=>{
        console.log(localStorage.getItem("loggedInUser"))
        // console.log(JSON.parse(localStorage.getItem("loggedInUser")))
    }
    return {saveUserData,loggedInUser,clearUserData,fetchUserData}
}

export default useStorage;