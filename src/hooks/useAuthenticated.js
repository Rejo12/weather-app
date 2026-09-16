import { useState, useEffect } from "react"

const useAuthenticated=()=>{
const [token,setToken] = useState(null)
const [isAuthenticated,setIsAuthenticated] = useState(false)

const fetchToken=()=>{
   return localStorage.getItem("authToken")
}

const saveToken=(token)=>{
    localStorage.setItem("authToken",token)
    console.log({token})
    setToken(token)
}

const removeToken=()=>{
    localStorage.removeItem("authToken")
    setToken(null)
}

const checkIsAuthenticated=()=>{
    console.log(JSON.parse(localStorage.getItem("authToken")) , new Date().getTime())
    // setIsAuthenticated(token > new Date().getTime())
    return (JSON.parse(localStorage.getItem("authToken")) > new Date().getTime())
}

useEffect(()=>{
    fetchToken()
    // saveToken(new Date(Date.now()+2*1000).getTime())
},[])

return {token,fetchToken,saveToken,removeToken,isAuthenticated,checkIsAuthenticated}
}

export default useAuthenticated;