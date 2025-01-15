import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/appcontext'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const {backendUrl, token, setToken} = useContext(AppContext)
    const navigate = useNavigate()

    const [state, setState] = useState('Sign Up')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e)=>{
        e.preventDefault();
        try {
            
            if (state === "Sign Up") {
                const {data} = await axios.post(backendUrl + '/api/user/register', {name,email,password})
                if (data.success) {
                    localStorage.setItem('token', data.token)
                    setToken(data.token)
                }
                else{
                    alert("error")
                }
            }
            else{

                const {data} = await axios.post(backendUrl + '/api/user/login', {email, password})
                if(data.success){
                    localStorage.setItem('token', data.token)
                    setToken(data.token)
                }
                else{
                    alert("error")
                }
            }


        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
        if (token) {
            navigate("/")
        }
    },[token])

  return (
    <div className=' w-[100%] h-screen flex justify-center items-center'>
        <form onSubmit={onSubmitHandler} className=' border shadow-2xl p-5 rounded-lg'>
            {
                state === "Sign Up" ? 
                <h1 className=' text-center text-2xl font-bold'>Register</h1> :
                <h1 className=' text-center text-2xl font-bold'>Login</h1>
            }
            {
                state === "Sign Up" &&
                <div>
                    <label htmlFor="name">Name:</label>
                    <input onChange={(e)=>setName(e.target.value)} value={name} className=' border py-2 w-full my-2 px-2' type="text" name="" id="" required />
                </div>
            }
            <div>
                <label htmlFor="name">Email:</label>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} className=' border py-2 w-full my-2 px-2' type="email" name="" id="" required />
            </div>
            <div>
                <label htmlFor="name">Password:</label>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} className=' border py-2 w-full my-2 px-2' type="password" name="" id="" />
            </div>

        
            <button className=' w-full bg-blue-800 text-white py-2 rounded-lg mt-3'>{ state === "Sign Up" ? " Register" : "Login"}</button> 
            
            {
                state === "Sign Up" ?
                <p className=' pt-2 text-sm cursor-pointer' onClick={()=>setState("Login")}>Click here to <span className=' underline'>Login</span></p>
                : 
                <p className=' pt-2 text-sm cursor-pointer' onClick={()=>setState("Sign Up")}>Click here to <span className=' underline'>Register</span></p>
                
            }

        </form>
    </div>
  )
}

export default Register