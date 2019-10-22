import React, { Component } from 'react'
// import "../css/courseCard.css"
import {Animated} from "react-animated-css";
import {toggleValue} from '../store/toggleAction'
import { connect } from 'react-redux'
import "../css/filtering.css"

export class Filtering extends Component{

    
    toggleFilter = () => {
        if (!this.props.check){
            this.refs.foot.classList.add('foot-display');
            this.refs.foot.classList.remove('footer');
        }
       this.props.toggleValue(this.props.check)
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
      

        <Animated className="fixed-bottom" animationIn="fadeInUpBig" animationOut="fadeOutDownBig" animationInDuration={300} animationOutDuration={1000} isVisible={this.props.check}>
        <div>
            <div ref="foot" id="footer" className="footer fixed-bottom">
                <div className="container-fluid">
                    <div classNAame="row text-center">
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

const mapStateToProps = (state) => ({
    check: state.toggle.value
})

export default connect(mapStateToProps, {toggleValue})(Filtering)
