import React, {createContext} from 'react'
import '../styles/App.css';
import { UserProfile } from './UserProfile';
export const contextData = createContext();



const App = () => {

  return (
    <div id="main">
      <contextData.Provider value={{name:"Newton",age:3}}>
        <UserProfile />
      </contextData.Provider>
      
    </div>
  )
}


export default App;
export {UserContext}
