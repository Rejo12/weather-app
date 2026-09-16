import {useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import userCredentails from './UserCredentials.json' with {type:"json"}
import useAuthenticated from '../hooks/useAuthenticated'
import logo from '../logo.jpg'
import useStorage from '../hooks/useStorage'

const SignIn=()=>{
    const [userId,setUserId] = useState("")
    const [password,setpassword] = useState("")
    const [isError, setIsError] = useState(false)
    const userIdRef = useRef(null)
    const passwordRef = useRef(null)
    const navigate = useNavigate()
    const {token,fetchToken,saveToken,removeToken,isAuthenticated,checkIsAuthenticated} = useAuthenticated()
    const {saveUserData} = useStorage()

    const handleSignIn=()=>{
        console.log({userCredentails})
        const result = userCredentails.find((ele)=>ele.userId === userId && ele.password === password )
        if(result) {
            saveToken(new Date(Date.now()+60*60*1000).getTime())
            saveUserData(userId)
            navigate('/dashboard')
        }
        else setIsError(true)    
        if(userId.length == 0)
            userIdRef.current.classList.add('error-class')
        if(password.length === 0)
            passwordRef.current.classList.add('error-class')
    }

     if(userId.length > 0)
            userIdRef.current.classList.remove('error-class')
        if(password.length > 0)
            passwordRef.current.classList.remove('error-class')

    return(
        <div className="sign-in-conatiner">
            <div className="sign-in-box">
                <div className="">
                <p>Welcome to <strong>Weather today</strong></p>
                {/* <img src={logo} alt="logo" width="90px" height="90px" /> */}
                </div>
            <h2>Sign In</h2>
            <input name="userId" ref={userIdRef} type="email" placeholder="Enter your user id" value={userId} onChange={e=>{setUserId(e.target.value);setIsError(false)}} />
            <input name="password" ref={passwordRef} type="password" placeholder="Enter your password"value={password} onChange={(e)=>{setpassword(e.target.value);setIsError(false)}} />
             {isError ? (<p className='error-msg'>Invalid user credentials</p>) : <p></p>}
            <button onClick={handleSignIn}>Sign in</button>
            <p><i>New user?</i> <span onClick={()=>navigate('/signup')} className="sign-up-link">SignUp</span></p>
            </div>
            </div>
    )
}

export default SignIn