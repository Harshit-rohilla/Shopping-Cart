import { FaShoppingCart } from "react-icons/fa";
import Home from "./components/Home"
import Cart from "./components/Cart"
import {Routes,Route} from "react-router-dom"
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import Loader from "./components/Loader"
import {useSelector} from 'react-redux'

function App(){
  const[loading,setLoading]=useState(true)
  const [data,setData]=useState([])
  const url=`https://fakestoreapi.com/products`
  const cart=useSelector((state)=>state.btn)

  async function fetchData(){
    try{
      const res= await fetch(url)
      const res2= await res.json()
      setData(res2)
      setLoading(false)
    }
    catch(error){
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  return(
    <>
    <nav className="w-full bg-gray-900">
      <div className="w-2/3 mx-auto flex justify-between items-center">
        <div className="">
        <Link to='/'><img className="object-cover w-48 h-16" src="/shopping-cart-logo.svg" alt="logo"/></Link>
        </div>
        <div className="flex justify-center gap-x-6 items-center">
          <span className="text-slate-200 text-lg cursor-pointer hover:text-green-600 transition-colors duration-300"><Link to="/">Home</Link></span>
          <span className="cursor-pointer relative">{cart.length>0?(<Link to='/cart'><div className="w-4 h-4 ani text-xs flex justify-center items-center rounded-full bg-green-600 text-slate-100 z-10 absolute -top-1 -right-1">{cart.length}</div></Link>):(null)}<Link  to="/cart"><FaShoppingCart className="text-white text-[25px] hover:text-green-600 transition-colors duration-300" /></Link></span>
        </div>
      </div>
    </nav>
  
    <Routes>
      <Route path='/' element={loading?(<Loader/>):(<Home data={data} />)}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </>
  )
}
export default App