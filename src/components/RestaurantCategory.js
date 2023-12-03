import ItemList from "./ItemList";
import {useState} from "react";
const RestaurantCategory=({data,showItems,setShowIndex,setShowIndex2})=>{
   // console.log(data);
    //const[showItems ,setShowItems]=useState(false)
    const [count,setCount]=useState(false);
    const handleClick=()=>{
            if(count===false){
            setShowIndex();
            setCount(!count)
            }
            else{
                setShowIndex2()
                setCount(!count)
            }
    }
    return(
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between" onClick={handleClick}>
                <span  className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
                </div>
               {showItems&& <ItemList items={data.itemCards}/>}

            </div>
            
        </div>
    )
}

export default RestaurantCategory;