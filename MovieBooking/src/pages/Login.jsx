// import React, { useContext, useEffect } from 'react'
// import { AppContext } from '../context/appcontext'

// const Login = () => {
//   const {userData, setUserData, setToken,  token,loadUserProfile} = useContext(AppContext)

//   useEffect(()=>{
//     if (token) {
//       loadUserProfile()
//     }else{
//       setUserData(false)
//     }
// },[token])

// const logout = async ()=>{
//   setToken(false)
//   localStorage.removeItem('token')
// }

//   return (
//     <div>
//       <div className=' mx-10'>
//         <p>{userData.name}</p>
//         <p>{userData.email}</p>
//         <p>{userData._id}</p>
//         <button className=' bg-blue-800 p-2 rounded-lg text-white my-5' onClick={logout}> Log out</button>
//       </div>
//     </div>
//   )
// }

// export default Login