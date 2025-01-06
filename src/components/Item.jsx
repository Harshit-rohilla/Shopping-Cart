import {useDispatch } from "react-redux"
import {add,remove} from "../redux/slices/btnSlice"
import {useState} from "react"
import Toast from 'react-hot-toast'

function Item({obj}){
    const [btnValue,setBtnValue]=useState('ADD TO CART')
    const dispatch =useDispatch()
    return(
        <>
        <div className="h-80 w-[23.5%] py-2 px-3 group rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:scale-110 transition-transform duration-300 flex flex-col gap-y-4 items-center">
            <h1 className="text-base mx-auto h-6 text-center  overflow-hidden text-gray-700  font-bold w-[85%]">{obj.title.substring(0,18)}...</h1>
            <h2 className="text-slate-500  mx-auto text-xs  w-[85%]">{obj.description.substring(0,50)}...</h2>
            <img className="h-36 aspect-auto" src={obj.image} alt="product-image"/>
            <div className="flex justify-between items-center w-full mt-3">
                <span className="font-bold text-green-600">${obj.price}</span>
                <button onClick={()=>{btnValue==='ADD TO CART'?(dispatch(add(obj)),Toast.success('ITEM ADDED')):(dispatch(remove(obj)),Toast.error('ITEM REMOVED!')); btnValue==='ADD TO CART'?(setBtnValue("REMOVE ITEM")):(setBtnValue("ADD TO CART"))}} className="px-3 py-1 text-center rounded-2xl border-2 font-semibold border-gray-500 text-gray-500 text-sm group-hover:text-slate-200 group-hover:border-slate-800 group-hover:bg-slate-800 transition-colors duration-300">{btnValue}</button>
            </div>
        </div>
        </>
    )
}
export default Item