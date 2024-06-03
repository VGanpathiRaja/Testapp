import React from "react";
import { Route, BrowserRouter } from 'react-router-dom';
import Home from "./home";
import Filter from "./filter";
import Details from "./details";

function Router(){
    return(
        <BrowserRouter>
            <Route exact path ='/' component={Home}/>
            <Route exact path ='/filter' component={Filter}/>
            <Route exact path ='/details' component={Details}/>
        </BrowserRouter>
    )
}
export default Router;