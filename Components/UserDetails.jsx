import React from 'react'
import { fakeUserData } from '../api/api'
import { useDispatch } from 'react-redux'
import { addUser, deleteUsers } from '../src/Store/Slices/UserSlice'
import DisplayUser from './DisplayUser'

export default function UserDetails() {
   const dispatch = useDispatch()
   async function AddUserButton() {
      const payload = await fakeUserData()
      dispatch(addUser(payload))
   }
   function ClearAllUsers() {
      dispatch(deleteUsers())
   }

   return (
      <>
         <div className="w-[700px]">
            <div className=" border-b-2 border-b-black w-100 p-5 flex flex-row items-center justify-between">
               <p className="text-2xl font-medium text-gray-500">List of User Details</p>
               <button className=' bg-blue-500 text-white py-1 px-3 font-medium rounded-md' onClick={AddUserButton}>Add new users</button>
            </div>
            <DisplayUser />
            <div className="w-100 flex flex-row items-center justify-end">
               <button className='bg-green-600 text-white py-1 px-3 font-medium rounded-md mt-5 mr-5' onClick={ClearAllUsers}>Clear all users</button>
            </div>
         </div>
      </>
   )
}
