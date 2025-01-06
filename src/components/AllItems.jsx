import Item from "./Item"

function AllItems({data}){
    if (data.length>0){
        return(
            <div className="w-full pt-6">
            <div className="w-2/3 mx-auto justify-center flex flex-wrap  gap-x-4 gap-y-8">
                {data.map((obj)=>(<Item key={obj.id} obj={obj}/>))}            
            </div>
        </div>
        )
    }
    else{
        return(
            <div className="w-full h-[90vh] flex justify-center items-center">
                <span className="text-xl text-green-600">NO DATA FOUND</span>
            </div>
        )
    }
    
}
export default AllItems