import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;
   // console.log(resData);
    const{name,cuisines,avgRating,costForTwo,}=resData?.info;
    return (
        <div data-testid="resCard" className=" m-4 p-4 w-[190px] bg-gray-100 rounded-lg hover:bg-gray-400" >
            <img className="rounded-lg h-[120px] w-[180px]" alt="food-logo" src={CDN_URL+resData.info.cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            
        </div>
    )
}

export const withPromotedLabel=(RestaurantCard)=>{
     return (props)=>{
        return (
         <div>
            <label className="absolute bg-black text-white m-1 p-1 rounded-lg">Opened</label>
            <RestaurantCard {...props}/>
         </div>
        );
     }
}

export default RestaurantCard;