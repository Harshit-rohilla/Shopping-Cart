import { createSlice } from "@reduxjs/toolkit"
const cart=[]
export const btnSlice=createSlice({
    name:'btn',
    initialState:cart,
    reducers:{
        add:(state,action)=>{
            state.push(action.payload)
        },
        remove:(state,action)=>{
            return state.filter((obj)=>(obj.id!==action.payload.id))
        }
    }
})
export const {add,remove}=btnSlice.actions
export default btnSlice.reducer