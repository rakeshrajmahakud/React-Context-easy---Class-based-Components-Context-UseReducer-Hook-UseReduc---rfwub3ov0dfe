import { useContext } from 'react'
import React from 'react'
import { UserContext } from "./App"

const UserProfile = () =>{
      const data = useContext(UserContext);
     return(
       <>
         <h1 id="name">{data.name}</h1>
         <h1 id="age">{data.age}</h1>
       </>
    )

}

export {UserProfile}
