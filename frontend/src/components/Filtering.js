import React, { Component } from 'react'
// import "../css/courseCard.css"
import {Animated} from "react-animated-css";
import {toggleFilter} from '../store/toggleActions'
import {setFclicked, setSclicked, filterSemester} from '../store/filterActions'

import { connect } from 'react-redux'
import "../css/filtering.css"

export class Filtering extends Component{
   
    onFClicked = () => {
        if(this.props.spring_is_clicked){
            this.props.setFclicked(this.props.fall_is_clicked)
            this.props.setSclicked(this.props.spring_is_clicked)
        }
        else{
            this.props.setFclicked(this.props.fall_is_clicked)
        }
        // this.props.filterSemester(this.props.input, 'autumn', this.props.fall_is_clicked)
        
    }
    onSClicked = () => {
        if(this.props.fall_is_clicked){
            this.props.setFclicked(this.props.fall_is_clicked)
            this.props.setSclicked(this.props.spring_is_clicked)
        }
        else{
            this.props.setSclicked(this.props.spring_is_clicked)
        }
        // this.props.filterSemester(this.props.input, 'spring', this.props.spring_is_clicked)
        
    }
    applyFilter = () => {
        const fall = this.props.fall_is_clicked
        const spring = this.props.spring_is_clicked
        if(spring){
            this.props.filterSemester(this.props.input, 'spring', spring)   
            this.props.toggleFilter(this.props.check)
        }
        else if(fall){
            this.props.filterSemester(this.props.input, 'autumn', fall)
            this.props.toggleFilter(this.props.check)
        }
        else{
            return
        }
    }
    
    // resetFilter = () => {
    //     const fall = this.props.fall_is_clicked
    //     const spring = this.props.spring_is_clicked
    //     if(spring){
    //         this.props.setSclicked(spring)
    //         this.props.filterSemester(this.props.input, 'spring', spring)   
    //         this.props.toggleFilter(this.props.check)
    //     }
    //     else if(fall){
    //         this.props.setFclicked(fall)
    //         this.props.filterSemester(this.props.input, 'autumn', fall)
    //         this.props.toggleFilter(this.props.check)
    //     }
    // }

    handleToggle = () => {
        if (!this.props.check){
            this.refs.foot.classList.add('foot-display');
            this.refs.foot.classList.remove('footer');
        }
       this.props.toggleFilter(this.props.check)
    }

    
   
    render() {
    const reset = this.props.spring_is_clicked | this.props.fall_is_clicked ? <button id="applybutton" className="btn apply" onClick={this.resetFilter}>RESET FILTER</button>: null;

    
    return (
        <div>
      

        <Animated className="fixed-bottom" animationIn="fadeInUpBig" animationOut="fadeOutDownBig" animationInDuration={300} animationOutDuration={1000} isVisible={this.props.check}>
        <div>
            <div ref="foot" id="footer" className="footer fixed-bottom">
                <div className="container-fluid">
                    <div className="row text-center">
                        <h2 className="top-text">Filter & Sort</h2>
                        
                   </div>
                   <div className="row text-center">
                        <div className="col-5 filter text-center">
                                <h3 className="filter-text">Filter</h3>
                                <div className="row button-wrap">
                                    <button className={"btn " + (this.props.fall_is_clicked ? "clicked": "sort-button")} onClick={this.onFClicked}>FALL</button>
                                    <button className={"btn " + (this.props.spring_is_clicked ? "clicked": "sort-button")} onClick={this.onSClicked}>SPRING</button>
                                   
                                </div>
                               
                        </div>
                        
                        <div className="col-2">
                            <div className="row apply-wrap">
                                    <button id="applybutton" className="btn apply" onClick={this.applyFilter}>APPLY</button>
                                    {reset}
                            </div>
                        </div>
                        <div className="col-5 text-center">
                            <h3 className="sort-text">Sort</h3>
                            <div className="button-wrap">
                                <button className="btn sort-button">CODE</button>
                                <button className="btn sort-button">NAME</button>
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
