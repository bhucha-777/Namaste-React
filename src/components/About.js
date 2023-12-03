import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
        <div>
            <h1>About</h1>
            <div>
                LoggedInUser
                <UserContext.Consumer>{({loggedInUser})=><h1 className text-xl font-bold>{loggedInUser}</h1>}</UserContext.Consumer>
            </div>
            <h2> This is Namaste react web series</h2>
           
            <UserClass name={"Bhuvan Dinesh"} location={"TamilNadu"}/>
        </div>
        );
    }
}

export default About;