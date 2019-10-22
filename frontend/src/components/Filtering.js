import React, { Component } from 'react'
// import "../css/courseCard.css"
import {Animated} from "react-animated-css";

import "../css/filtering.css"

// import ButtonToolbar from 'react-bootstrap/ButtonToolbar'





export class Filtering extends Component{
    constructor(props) { 
        super(props);
        this.toggleFilter = this.toggleFilter.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
           check: false
        };
     };

    handleClick(){
        this.refs.button1.classList.add('foot-display');

    }
    toggleFilter(){
        if (!this.state.check){
            this.refs.foot.classList.add('foot-display');
            this.refs.foot.classList.remove('footer');
        }
        this.setState(prevState => ({check: !prevState.check}))
    }
    componentDidMount() {
        
        this.refs.filterButton.addEventListener('click', this.toggleFilter);
    }

    componentWillUnmount() {
        this.refs.filterButton.removeEventListener('click', this.toggleFilter);
    }
   
    render() {
        
  
    return (
        <div>
      

        <Animated className="fixed-bottom" animationIn="fadeInUpBig" animationOut="fadeOutDownBig" animationInDuration={500} animationOutDuration={1000} isVisible={this.state.check}>
        <div>
            <div ref="foot" id="footer" className="footer fixed-bottom">
                <div className="container-fluid">
                    <div className="row text-center">
                        <h2 className="top-text">Filter/Sort</h2>
                   </div>
                   <div className="row text-center">
                        <div className="col filter text-center">
                                <h3 className="filter-text">Filter</h3>
                                <div className="button-wrap">
                                    <button ref="button1" className="btn sort-button">F</button>
                                    <button className="btn sort-button">S</button>
                                </div>
                        </div>
                        <div className="col text-center">
                            <h3 className="sort-text">Sort</h3>
                            <div className="button-wrap">
                                <button className="btn sort-button">C</button>
                                <button className="btn sort-button">N</button>
                            </div>

                        </div>
                   </div>
                </div>
            </div>
            
        </div>     
        </Animated>
           
        <div className="foot-filter fixed-bottom">
                   
        </div>
        <button ref="filterButton" id="but" className="btn btn-info fixed-bottom">
                <i id="tune" className="large material-icons">tune</i>
               
        </button>
       
        
      

      
      </div>
      
    );
  }
}


// function Filtering() {
//     return (
       

//         <div className="card-wrap container">
                
//                 <button id="but" class="btn btn-rounded fixed-bottom">
//                     <i id="tune" className="material-icons">tune</i>
//                 </button>
               
                           
                   
//                 <br></br>
//             </div>
              
//     )
// }

export default Filtering
