import React, { Component } from 'react'

import {Animated} from "react-animated-css";
import {toggleFilter} from '../store/toggleActions'
import {setFclicked, setSclicked} from '../store/filterActions'
import {setCodeClicked, setNameClicked} from '../store/sortActions'
import {fetchCourses} from "../store/searchActions"
import {setQuery} from "../store/queryAction"
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
        
        
    }
    onSClicked = () => {
        if(this.props.fall_is_clicked){
            this.props.setFclicked(this.props.fall_is_clicked)
            this.props.setSclicked(this.props.spring_is_clicked)
        }
        else{
            this.props.setSclicked(this.props.spring_is_clicked)
        }
        
        
    }
    onCodeClicked = () => {
        if(this.props.name_is_clicked){
            this.props.setCodeClicked(this.props.code_is_clicked)
            this.props.setNameClicked(this.props.name_is_clicked)
        }
        else{
            this.props.setCodeClicked(this.props.code_is_clicked)
        }
        
        
    }
    onNameClicked = () => {
        if(this.props.code_is_clicked){
            this.props.setCodeClicked(this.props.code_is_clicked)
            this.props.setNameClicked(this.props.name_is_clicked)
        }
        else{
            this.props.setNameClicked(this.props.name_is_clicked)
        }
        
        
    }
    applyFilter = () => {
        const fall = this.props.fall_is_clicked
        const spring = this.props.spring_is_clicked
        const code = this.props.code_is_clicked
        const name = this.props.name_is_clicked
        let filter = ''
        let sort = ''
        let concat = ''
        filter = spring ? "&taught_in_spring=true" : ''
        filter = fall ? "&taught_in_autumn=true" : filter
        sort = code ? "&sorting=course_code" : ''
        sort = name ? "&sorting=norwegian_name" : sort
        concat = filter + sort
        let newQuery = this.props.query + concat
        console.log("NEW", newQuery)
        this.props.fetchCourses(this.props.query, concat)
        this.props.setQuery(newQuery)
        this.props.toggleFilter(this.props.check)

    }
    
    resetFilter = () => {
        this.props.fetchCourses(this.props.input, '')
        this.props.setQuery(this.props.input)
        this.props.toggleFilter(this.props.check)

        //Resets all button-is-clicked-values. Inverts the value taken in as parameter
        this.props.setFclicked(true)
        this.props.setSclicked(true)
        this.props.setCodeClicked(true)
        this.props.setNameClicked(true)
    }

    handleToggle = () => {
        if (!this.props.check){
            this.refs.foot.classList.add('foot-display');
            this.refs.foot.classList.remove('footer');
        }
       this.props.toggleFilter(this.props.check)
    }

    
   
    render() {
    let resetButton = this.props.spring_is_clicked | this.props.fall_is_clicked | this.props.code_is_clicked | this.props.name_is_clicked
    const reset = resetButton ? <button id="applybutton" className="btn apply" onClick={this.resetFilter}>RESET FILTER</button>: null;

    
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
                                <button className={"btn " + (this.props.code_is_clicked ? "clicked": "sort-button")} onClick={this.onCodeClicked}>CODE</button>
                                <button className={"btn " + (this.props.name_is_clicked ? "clicked": "sort-button")} onClick={this.onNameClicked}>NAME</button>
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
    input: state.courses.text, 
    query: state.query.query,
    code_is_clicked: state.sort.codeClicked,
    name_is_clicked: state.sort.nameClicked
})

export default connect(mapStateToProps, {toggleFilter, setFclicked, setSclicked, setQuery, fetchCourses, setCodeClicked, setNameClicked})(Filtering)
