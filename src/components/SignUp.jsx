import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useAuthenticated from "../hooks/useAuthenticated"
import useStorage from "../hooks/useStorage"

const SignUp = () => {

    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState({})
    const navigate = useNavigate()
    const { saveToken } = useAuthenticated()
    const { saveUserData } = useStorage()

    const handleSignUp = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        // password should contain 6 characters, atleast 1 uppercase,1lowercase, 1number, 1special character
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/

        if (emailRegex.test(userId) && passwordRegex.test(password) && passwordRegex.test(confirmPassword)) {
            if (password === confirmPassword) {
                saveToken(new Date(Date.now() + 60 * 60 * 1000).getTime())
                saveUserData(userId)
                navigate('/dashboard')
            }
        }
        else {
            if (!emailRegex.test(userId)) {
                setError((prevError) => ({ ...prevError, idError: true }))
                console.warn("invalid user id")
            }
            else {
                setError((prevError) => ({ ...prevError, idError: false }))
            }
            if (!passwordRegex.test(password)) {
                setError((prevError) => ({ ...prevError, passwordError: true }))
                console.warn("Invalid password")
            }
            else {
                setError((prevError) => ({ ...prevError, passwordError: false }))
            }
            if (!passwordRegex.test(confirmPassword)) {
                setError((prevError) => ({ ...prevError, confirmPasswordError: true }))
                console.warn("Invalid confirm password")
            }
            else {
                setError((prevError) => ({ ...prevError, confirmPasswordError: false }))
            }
        }

    }

    const handleUserData = (type, e) => {
        if (type === "userId") {
            setUserId(e.target.value)


        }
        else if (type === "password") {
            console.log(type, e.target.value)
            setPassword(e.target.value)
        }
        else {
            setConfirmPassword(e.target.value)
        }
    }
    console.log(userId)
    return (
        <div className="sign-in-conatiner">
            <div className="sign-in-box">
                <label for="userId">
                    User id:
                </label>
                <input type="email" id="userId" name="userId" onChange={e => handleUserData("userId", e)} />
                {error.idError && (<p className='error-msg'>User id should follow the same pattern as mail id.</p>)
                }
                <label for="password">
                    Password:
                </label>
                <input type="password" id="password" name="password" value={password} onChange={e => handleUserData("password", e)} />
                {error.passwordError && (<p className='error-msg'>Password should contain 6 characters, atleast 1 uppercase,1lowercase, 1number, 1special character</p>)
                }
                <label for="confirmPassword">
                    Confirm password:
                </label>
                <input type="password" id="confirmPassword" name="confirmPassword" onChange={e => handleUserData("confirmPassword", e)} />
                {error.confirmPasswordError && (<p className='error-msg'>Should be same as password</p>)
                }
                <button onClick={handleSignUp}>Sign up</button>
                <p>Back to  <span onClick={()=>navigate('/')} className="sign-up-link">Sign in</span></p>

            </div>
        </div>
    )
}

export default SignUp