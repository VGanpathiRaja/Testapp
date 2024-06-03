import React from "react";
import '../style/filtercss.css'

class Filter extends React.Component{
    render(){
        return(
            <div className="heading">
               <h1> Breakfast places in Mumbai</h1>
    
                    <div className="filterPanel">
                        <div className="filterPanelHeading">
                           <h3> Filters</h3>
                        </div>
                        <div className="filterPanelSubHeading">
                            <h3> Select Location</h3>  
                        </div>
                        <select className="locationSelection">
                            <option disabled selected>Select location</option>
                            <option>Delhi</option>
                            <option>Mumbai</option>
                            <option>Kolkota</option>
                            <option>Chennai</option>
                        </select>
                        <div className="filterPanelSubHeading">
                            Cuisine
                        </div>
                        <input type="checkbox" className="cuisineOption" />
                            <label>North Indian</label>
                        
                        <input type="checkbox" className="cuisineOption"/>
                            <label>South Indian</label>
                       

                        <input type="checkbox" className="cuisineOption"/>
                            <label>Chinese</label>
                       

                        <input type="checkbox" className="cuisineOption"/>
                            <label>Fast food</label>
                         

                         <input type="checkbox" className="cuisineOption"/>
                             <label>Street food</label>
                        

                         <div className="filterPanelSubHeading"/>
                                 Cost for two
                         </div>
                        <input type="checkbox" className="cuisineOption"/>
                            <label>less than  &#8377;500</label>
                        
                        <input type="checkbox" className="cuisineOption"/>
                             <label>&#8377;500 to &#8377;1,000</label>
                        

                        <input type="checkbox" className="cuisineOption"/>
                          <label>&#8377;1000 to &#8377;1,500</label>
                        

                        <input type="checkbox" className="cuisineOption"/>
                             <label>&#8377;1,500 to &#8377;2,000</label>
                    

                        <input type="checkbox" className="cuisineOption"/>
                            <label>More than &#8377;2,000</label>
                    

                        <div className="filterPanelSubHeading">
                         <p>Sort</p>
                         
                         <input type="checkbox" className="cuisineOption"/>
                             <label>price low to high</label>
                        
                          <input type="checkbox" className="cuisineOption"/>
                              <label>price high to low</label>
                           
                    </div>
             

            
            </div>
        )
    }
}
export default Filter;