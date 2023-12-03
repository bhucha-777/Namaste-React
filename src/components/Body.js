import RestaurantCard,{withPromotedLabel} from "./RestaurantCard.js";
import resList from "../utils/mockData.js";
import {useState, useEffect,useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
const Body=()=>{
    const [listOfRestaurants, setOfRestaurant]=useState([]);
    const [searchText,setSearchText]=useState(" ");
    const[filteredRestaurant, setfilteredRestaurant]=useState([]);
    const {setUserName,loggedInUser}=useContext(UserContext);
    const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);
    useEffect(()=>{ 
        fetchData();
    },[]);
    const fetchData=async ()=>{
        const data=await fetch(
              "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.064669&lng=76.944696&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
              
        );
        const data2= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.064669&lng=76.944696&restaurantId=65609&catalog_qa=undefined&submitAction=ENTER");
        const json2=await data2.json();
        //console.log(json2);
        const json=await data.json();
       // console.log(json);
        setOfRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        setfilteredRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        // console.log(json);
        // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        
    }
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false) return<h1>Looks like you're offline!! Please check your Internet</h1>
    
    if(listOfRestaurants==0){
    return <h4> Loading</h4>;
    }
    return (
        <div data-testid="resCard"className="body ">
            <div className="filter flex ">
                <div className="search m-4 p-4 ">
                    <input type="text" data-testid ="searchInput"className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value); 
                    }}/>
                    <button className="px-4 bg-green-200 m-4 rounded-lg"onClick={
                        ()=>{
                         const filteredRestaurant=listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                         setfilteredRestaurant(filteredRestaurant);
                        }
                    }>Search</button>
                </div>
                <div>

                <button  className="px-2 bg-gray-300 h-8 mt-12 rounded-lg border border-black " onClick={()=>{
                    const filteredList=listOfRestaurants.filter(
                        (res)=> res.info.avgRating>4.3
                    );
                    setfilteredRestaurant(filteredList);
                 
                }} >
                    Top Rated Restaurant</button>
            
            </div>
            <div className="flex items-center m-4 p-4">
                <label  className="m-1">Username </label>
                <input
            className="border border-black p-1" id="1"
            value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}
          />
          
            </div>
            </div>
            <div className="flex flex-wrap"> 
                {
                    filteredRestaurant.map((restaurant)=>(
                        
                       <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                         {restaurant.info.isOpen?(<RestaurantCardPromoted resData={restaurant}/>):(<RestaurantCard resData={restaurant}/>)} </Link>
                       
                    ))
                }
                
            </div>
        </div>
    )
}
export default Body;