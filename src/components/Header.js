import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header=()=>{
    let btnName="Login";
    const [btNamereact, setbtnNamereact]=useState("Login");
    const onlineStatus=useOnlineStatus();
    const  {loggedInUser}=useContext(UserContext);
    
    const cartItems=useSelector((store)=>store.cart.items);
    
    return (
        
        <div className="flex justify-between bg-green-200 shadow-lg m-2">
            
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL}/>

            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{onlineStatus?"✅":"🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact US</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold"><Link to="/cart">Cart ({cartItems.length})</Link></li>
                   <button className="login" onClick={()=>{
                    btNamereact==="Login"?setbtnNamereact("Logout"):setbtnNamereact("Login");
                   }}>{btNamereact}</button>
                   <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>

            </div>
        </div>
    );
};
 export default Header;
