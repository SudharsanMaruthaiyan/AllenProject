// import React from "react";
// import axios from "axios";
// import { createContext, useState } from "react";


// export const AppContext = createContext();

// const AppContextProvider = (props)=>{
//     const backendUrl = import.meta.env.VITE_BACKEND_URL

//     const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)
//     const [userData, setUserData] = useState(false)

//     const loadUserProfile = async ()=>{
//         try {
//             const {data} = await axios.get(backendUrl + '/api/user/get-profile', {headers:{token}})
//             if (data) {
//                 setUserData(data.userData)
//             }
//             else{
//                 console.log(error);
                
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }
    
//     const value = {
//         backendUrl,
//         token,
//         setToken,
//         userData, setUserData, loadUserProfile
//     }


//     return(
//         <AppContext.Provider value={value} >
//             {props.children}
//         </AppContext.Provider>
//     )
// }

// export default AppContextProvider