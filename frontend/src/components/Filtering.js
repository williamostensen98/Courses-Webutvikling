import React, { Component } from 'react'
// import "../css/courseCard.css"
import {Animated} from "react-animated-css";
import {toggleFilter} from '../store/toggleActions'
import {setFclicked, setSclicked, filterSemester} from '../store/filterActions'

import { connect } from 'react-redux'
import "../css/filtering.css"

export class Filtering extends Component{
   
    setFclicked = () => {
        if(this.props.spring_is_clicked){
            return
        }
        this.props.setFclicked(this.props.fall_is_clicked)
        this.props.filterSemester(this.props.input, 'autumn', this.props.fall_is_clicked)
        
    }
    setSclicked = () => {
        if(this.props.fall_is_clicked){
            return
        }
        
        
        this.props.setSclicked(this.props.spring_is_clicked)
        this.props.filterSemester(this.props.input, 'spring', this.props.spring_is_clicked)
        
    }

    handleToggle = () => {
        if (!this.props.check){
            this.refs.foot.classList.add('foot-display');
            this.refs.foot.classList.remove('footer');
        }
       this.props.toggleFilter(this.props.check)
    }

    
   
    render() {
    
    
    return (
        <div>
      

        <Animated className="fixed-bottom" animationIn="fadeInUpBig" animationOut="fadeOutDownBig" animationInDuration={300} animationOutDuration={1000} isVisible={this.props.check}>
        <div>
            <div ref="foot" id="footer" className="footer fixed-bottom">
                <div className="container-fluid">
                    <div className="row text-center">
                        <h2 className="top-text">Filter/Sort</h2>
                        
                   </div>
                   <div className="row text-center">
                        <div className="col filter text-center">
                                <h3 className="filter-text">Filter</h3>
                                <div className="row button-wrap">
                                    <button className={"btn " + (this.props.fall_is_clicked ? "clicked": "sort-button")} onClick={this.setFclicked}>F</button>
                                    <button className={"btn " + (this.props.spring_is_clicked ? "clicked": "sort-button")} onClick={this.setSclicked}>S</button>
                                   
                                </div>
                                <div className="col">
                                    <h6>Fall</h6>
                                    <h6>Spring</h6>
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
        <button ref="filterButton" id="but" onClick={this.handleToggle} className="btn btn-info fixed-bottom">
                <i id="tune" className="large material-icons">tune</i>
               
        </button>
       

      </div>
      
    );
  }
}

const mapStateToProps = (state) => ({
    check: state.toggle.filter, 
    fall_is_clicked: state.filter.fclicked, 
    spring_is_clicked: state.filter.sclicked,
    input: state.courses.text
})

export default connect(mapStateToProps, {toggleFilter, setFclicked, setSclicked, filterSemester})(Filtering)
