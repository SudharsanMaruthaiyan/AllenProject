import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { data, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/Appcontexted';
import { toast } from 'react-toastify';

const Register = () => {

    const {backendUrl, token, setToken} = useContext(AppContext)
    const navigate = useNavigate()

    const [state, setState] = useState('Sign Up')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setPreview(imageUrl); // Update preview with the image URL
        } else {
            setPreview(null);
        }
    };

    const handleImageClick = () => {
        setPreview(null); // Reset preview
        setFile(null); // Allow reselecting file
    };


    const onSubmitHandler = async (e)=>{
        e.preventDefault();
        try {
            
            if (state === "Sign Up") {

                // Create FormData for multipart data submission
                const formData = new FormData();
                formData.append('name', name);
                formData.append('email', email);
                formData.append('password', password);
                formData.append('testImage', file); 

                const {data} = await axios.post(backendUrl + '/api/user/register', formData ,{
                    headers: { 'Content-Type': 'multipart/form-data' } ,
                }) 
                if (data.success) {
                    localStorage.setItem('token', data.token)
                    setToken(data.token)
                    toast.success('User registered successfully!');
                }
                else{
                    toast.error(data.message || 'Registration failed.');
                }

            }
            else{

                const {data} = await axios.post(backendUrl + '/api/user/login', {email, password})
                if(data.success){
                    localStorage.setItem('token', data.token)
                    setToken(data.token)
                    toast.success('User logged in successfully!');
                    
                }
                else{
                    toast.error(data.message || 'Login failed.');
                }
            }

        } catch (error) {
            console.log(error);
            toast.error('An error occurred. Please try again.');
        }
    }
    useEffect(()=>{
        if (token) {
            navigate("/")
        }
    },[token])

  return (
    <div className=' w-[100%] h-screen flex justify-center items-center bg-secondary'>
        <form onSubmit={onSubmitHandler} className=' border shadow-2xl p-5 rounded-lg'>
            {
                state === "Sign Up" ? 
                <h1 className=' text-center text-2xl font-bold text-white'>Register</h1> :
                <h1 className=' text-center text-2xl font-bold text-white'>Login</h1>
            }
            {
                state === "Sign Up" &&
                <div>
                    <div className=' flex justify-center mt-3'>
                        {!preview && (
                            <input
                                onChange={handleFileChange}
                                className="text-white w-12 h-12 rounded-full bg-white cursor-pointer"
                                type="file"
                                name="profile_image"
                                accept="image/*"
                                required
                            />
                        )}
                        {preview && (
                            <div className="mt-3 relative">
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="w-24 h-24 rounded-full border cursor-pointer"
                                    onClick={handleImageClick}
                                />
                                {/* <p className="text-xs text-white mt-1">Click the image to change</p> */}
                            </div>
                        )}
                    </div>
                    <label htmlFor="name" className=' text-white'>Name:</label>
                    <input onChange={(e)=>setName(e.target.value)} value={name} className=' border py-2 w-full my-2 px-2' type="text" name="" id="" required />
                </div>
            }
            <div>
                <label htmlFor="name" className=' text-white'>Email:</label>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} className=' border py-2 w-full my-2 px-2' type="email" name="" id="" required />
            </div>
            <div>
                <label htmlFor="name" className=' text-white'>Password:</label>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} className=' border py-2 w-full my-2 px-2' type="password" name="" id="" required/>
            </div>

        
            <button className=' w-full bg-blue-800 text-white py-2 rounded-lg mt-3'>{ state === "Sign Up" ? " Register" : "Login"}</button> 
            
            {
                state === "Sign Up" ?
                <p className=' pt-2 text-sm cursor-pointer text-white' onClick={()=>setState("Login")}>Click here to <span className=' underline'>Login</span></p>
                : 
                <p className=' pt-2 text-sm cursor-pointer text-white' onClick={()=>setState("Sign Up")}>Click here to <span className=' underline'>Register</span></p>
            }

        </form>
    </div>
  )
}

export default Register