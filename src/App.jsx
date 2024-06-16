import React from 'react'
import './App.css'
import Navbar from '../Components/Navbar'
import UserDetails from '../Components/UserDetails'

function App() {

   return (
      <>
         <div className="flex justify-center items-center flex-col ">
            <Navbar />
            <UserDetails />
         </div>
      </>
   )
}

export default App
