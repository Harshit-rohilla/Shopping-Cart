import { useSelector } from "react-redux"
import {Link} from 'react-router-dom'
import CartItem from "./CartItem"
function Cart(){
    const cart=useSelector((state)=>state.btn)
    
    if(cart.length>0){
        const total=cart.reduce((acc,curr)=>(acc+curr.price),0)
        return(
            <div className="w-2/3 mx-auto flex mt-8">
                <div className="w-[70%]">
                    {cart.map((obj)=>(<CartItem key={obj.id} obj={obj}/>))}
                </div>
                <div className="w-[30%] mt-8 pl-4">
                    <p className="text-base text-green-600 font-semibold">YOUR CART</p>
                    <p className="text-3xl text-green-600 font-bold">SUMMARY</p>
                    <p className="font-medium text-gray-700 mb-2 mt-4">Total Items: <span className="font-bold text-gray-900">{cart.length}</span></p>
                    <p className="font-medium text-gray-700">Total Amount: <span className="font-bold text-gray-900">{total}$</span></p>
                    <button className="bg-green-600 w-full py-2 mt-4 text-slate-100 font-medium rounded-md">Checkout Now</button>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="h-[90vh] flex-col w-full flex items-center justify-center">
                <span className="font-semibold mb-4 text-slate-700 ">Your cart is empty!</span>
                <Link to='/'><button className="bg-green-600 px-6 py-2 border-none text-slate-100 text-base rounded-lg">SHOP NOW</button></Link>
            </div>
        )
    }
}
export default Cart