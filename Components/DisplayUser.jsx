import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeUser } from '../src/Store/Slices/UserSlice'

export default function DisplayUser() {
   const dispatch = useDispatch()

   function DeleteUserButton(id) {
      dispatch(removeUser(id))
   }
   const data = useSelector((StoreState) => {
      return StoreState.user
   })

   // useEffect(() => {
   //    console.log('re-render')
   // })

   return (
      <>
         {
            data.map((user, id) => {
               return <li className=' list-none border-b border-b-black p-5 flex flex-row items-center justify-between' key={id}>
                  <p className='text-lg'>{user}</p>
                  <button onClick={() => { DeleteUserButton(id) }}>❌</button>
               </li>
            })
         }
      </>

   )
}
