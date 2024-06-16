import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
   name: 'user',
   initialState: [],
   reducers: {
      addUser(state, action) {
         state.push(action.payload)
      },
      removeUser(state, action) {
         state.splice(action.payload, 1)
         // splice(index_to_start_deletion_from, number_of_deletions, replacement_item1(optional), item2(optional))
      },
      deleteUsers(state, action) {
         // return []
         state.length = 0
      },
   }
})

export { userSlice }
export const {
   addUser,
   removeUser,
   deleteUsers
} = userSlice.actions