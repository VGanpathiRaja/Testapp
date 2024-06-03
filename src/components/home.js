import React from "react";
import '../style/home.css'
import Wallpaper from "./wallpaper";
import Quikeysearc from "./quikeysearc";

class Home extends React.Component{
    render(){
        return(
            <div>
                <Wallpaper/>
                <Quikeysearc/>
                
            </div>
        )
    }
}
export default Home;