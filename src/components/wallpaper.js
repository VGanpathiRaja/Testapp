import React from "react";

class Wallpaper extends React.Component{
    render(){
        return(
            <div>
                <section className="top-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="heading-part">
                                    <div>
                                        <div className="logo">
                                            <img src="./img/quran-img.png" alt="logo" />
                                        </div>
                                        <h1> Find the <span>best part </span>our religion </h1>
                                        <form>
                                            <select id="cars" name="cars">
                                                <option value="#">--Select your choice--</option>
                                                <option value="volvo">Delhi</option>
                                                <option value="saab">Bangalore</option>
                                                <option value="fiat">Mumbai</option>
                                                <option value="audi">Chennai</option>
                                            </select>    
                                            <input type="search" placeholder="Enter your choice"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    }
    export default Wallpaper;
