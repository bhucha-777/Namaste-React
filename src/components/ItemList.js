import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartSlice";

const ItemList=({items})=>{
   console.log(items);
   const URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
   const dispatch=useDispatch();
   const handleAddItem=(item)=>{
   
       dispatch(addItem(item))
   }
 return(
    <div>
         {
            items.map((item)=>(
                <div data-testid="foodItems" key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 flex justify-between">
                    <div className="w-9/12 text-left ">
                    <div className=" py-2">
                        <span className="py-2">{item.card.info.name}</span>
                         <span> - ₹{item.card.info.price/100}</span>
                    </div>
                    </div>
                    <div className="w-3/12 p-4">
                    <div className="absolute">
                         <button className="p-1 rounded-lg bg-black text-white shadow-lg " onClick={()=>handleAddItem(item)}> Add +</button>
                    </div>
                    <img src={URL+item.card.info.imageId} className="w-full"/>
                    </div>
                </div>

            ))
         }
    </div>
 )
}
export default ItemList;