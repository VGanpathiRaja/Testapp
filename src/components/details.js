import React from "react";

class Details extends React.Component{
    render(){
        return(
            <div>
                <div className="col-9 col-sm-12 col-md-8 col-lg-9">
                    <div className="resultsPanel">
                        <div className="row upperSection">
                            <div className="col-2">
                                <img src="cake1.jpg" className="resultsImage" alt=""/>
                            </div>
                            <div className="col-10">
                                <div className="resultsHeading">The Big Chill Cake</div>
                                <div className="resultsSubHeading">FORT</div>
                                <div className="resultsAddress">Shop 1, Plot D, Samruddhi complex, shinsholi.</div>
                            </div>
                        </div>
                        <hr />
                        <div className="row lowerSection">
                            <div className="col-2">
                                <div className="resultsAddress">CUISINES:</div>
                                <div className="resultsAddress">COST FOR TWO:</div>
                            </div>
                            <div className="col-10">
                                <div className="resultsSubHeading">Bakery:</div>
                                <div className="resultsSubHeading">&#8377;700</div>
                            </div>
                        </div>
                    </div>
                    <div className="resultsPanel">
                        <div className="row upperSection">
                            <div className="col-2">
                                <img src="cake2.jpg" className="resultsImage" alt=""/>

                            </div>
                            <div className="col-10">
                                <div className="resultsHeading">The Big Chill Cake</div>
                                <div className="resultsSubHeading">FORT</div>
                                <div className="resultsAddress">Shop 1, Plot D, Samruddhi complex, shinsholi.</div>
                            </div>
                        </div>
                    
                        <div className="row lowerSection">
                            <div className="col-2">
                                <div className="resultsAddress">CUISINES:</div>
                                <div className="resultsAddress">COST FOR TWO:</div>
                            </div>
                            <div className="col-10">
                                <div className="resultsSubHeading">Bakery:</div>
                                <div className="resultsSubHeading">&#8377;700</div>
                            </div>
                        </div>
                    </div>
                    <div className="pagination">
                        <div className="paginationButton">1</div>
                        <div className="paginationButton">2</div>
                        <div className="paginationButton">3</div>
                        <div className="paginationButton">4</div>
                        <div className="paginationButton">5</div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Details;