import { FaTrash } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {remove} from '../redux/slices/btnSlice'
function CartItem({obj}){
    const dispatch=useDispatch()
    return(
        <>
        <div className="mb-6">
            <div className="flex w-full justify-center gap-6 ">
                <div className="w-[33%] flex justify-end">
                    <img className="aspect-auto h-40" src={obj.image} alt="product image" />
                </div>
                <div className=" px-6 pt-2 w-2/3">
                    <p className="text-gray-700 text-base font-bold mb-2">{obj.title}</p>
                    <p className="text-slate-500 text-sm font-semibold mb-4">{obj.description.substring(0,120)}...</p>
                    <div className="flex justify-between w-full items-center">
                        <p className="text-green-600 font-bold">${obj.price}</p>
                        <button onClick={()=>{dispatch(remove(obj))}} className="w-7 h-7 rounded-full bg-red-300 flex justify-center items-center"><FaTrash className="text-red-500 text-[12px]" /></button>
                    </div>
                </div>
            </div>
            <div className="mt-6 w-[90%] mx-auto h-[2px] bg-slate-500 rounded-xl"></div>
        </div>
        </>
    )
}
export default CartItem