import React, { Component } from 'react'

import {Animated} from "react-animated-css";
import {toggleFilter} from '../actions/toggleActions'
import {setFclicked, setSclicked} from '../actions/filterActions'
import {setCodeClicked, setNameClicked} from '../actions/sortActions'
import {fetchCourses} from "../actions/courseActions"
import {setQuery} from "../actions/queryAction"
import { connect } from 'react-redux'
import "../css/filtering.css"

export class Filtering extends Component{
    
    
    onFClicked = () => {                                            // When fall button is clicked on filtermenu 
        if(this.props.spring_is_clicked){                           // it is checked if spring button is checked and if so this is un-clicked
            this.props.setFclicked(this.props.fall_is_clicked)      // and fall is set to clicked
            this.props.setSclicked(this.props.spring_is_clicked)    // If spring is not clicked only fall i set to clicked
        }                                                   
        else{                                                       // setFClicked and setSClicked works as toggle functions and will set the buttons 
            this.props.setFclicked(this.props.fall_is_clicked)      // to the opposite ( treu or false) of what their current state is
        }       
    }

    // Same logic here as with onFClicked
    onSClicked = () => {
        if(this.props.fall_is_clicked){
            this.props.setFclicked(this.props.fall_is_clicked)
            this.props.setSclicked(this.props.spring_is_clicked)
        }
        else{
            this.props.setSclicked(this.props.spring_is_clicked)
        } 
    }

    // Same logic here as with onFClicked
    onCodeClicked = () => {
        if(this.props.name_is_clicked){
            this.props.setCodeClicked(this.props.code_is_clicked)
            this.props.setNameClicked(this.props.name_is_clicked)
        }
        else{
            this.props.setCodeClicked(this.props.code_is_clicked)
        }  
    }

    // Same logic here as with onFClicked
    onNameClicked = () => {
        if(this.props.code_is_clicked){
            this.props.setCodeClicked(this.props.code_is_clicked)
            this.props.setNameClicked(this.props.name_is_clicked)
        }
        else{
            this.props.setNameClicked(this.props.name_is_clicked)
        }  
    }

    // checks if the query already contains the the filter when applying
    // this is to avoid added the query multiple times when apllying a filter
    filterChecks(input){
        return this.props.query.includes(input) ? '': input 
    }
    // checks if the query already contains the the sort when applying
    sortChecks(input){
        return this.props.query.includes(input) ? '': input 
    }
    /*
    Since it is only possible to set either fall or spring and either code or name 
    this function checks of one of the sentences is already in the query and if the other box is checked
    if so the query has to be replaced with the query for the checked box
    */
    changed(codeQuery, nameQuery, fallQuery, springQuery, code, name, fall, spring){
        let changed = ''
        let s = this.props.query
        if(this.props.query.includes(codeQuery) && name){
            changed = s.replace("course_code","norwegian_name")
        }
        else if(this.props.query.includes(nameQuery) && code){
            changed = s.replace("norwegian_name","course_code")
        }
        if(this.props.query.includes(springQuery) && fall){
            changed = s.replace("spring","autumn")
        }
        else if(this.props.query.includes(fallQuery) && spring){
            changed = s.replace("autumn","spring")
        }
        return changed
        
    }


    /*
    When some of the filter or sort buttons is clicked the "Apply" buttom will be able to 
    press and will run this function when clicked
    */
    applyFilter = () => { // TODO - Apply logic such that buttons are disabled after applying
        const fall = this.props.fall_is_clicked
        const spring = this.props.spring_is_clicked
        const code = this.props.code_is_clicked
        const name = this.props.name_is_clicked
        const fallQuery = "&taught_in_autumn=true"
        const springQuery = "&taught_in_spring=true"
        const codeQuery = "&sorting=course_code"
        const nameQuery = "&sorting=norwegian_name"
 
        if(!(fall | spring | code | name)){                  // If none of the buttons are clicked it will not be possible to press the apply button
            this.resetFilter()
            return
        }

        // This firsts sets the variables "filter", "sort", "concat", and 'changed' to empty strings 
        let filter= ''  
        let sort= ''  
        let concat= ''  
        let change = ''
        change = this.changed(codeQuery, nameQuery, fallQuery, springQuery, code, name, fall, spring)   

        filter = spring ? "&taught_in_spring=true": ''              // Filter is then set to either the query for filtering the courses  
        filter = fall ? "&taught_in_autumn=true": filter            // on autumn or spring    
        sort = code ? "&sorting=course_code" : ''                   // Sort is also set to either the query for sorting on code or name or empty
        sort = name ? "&sorting=norwegian_name": sort

        filter = this.filterChecks(filter)
        sort = this.sortChecks(sort)
        concat = filter + sort                                      // concat is set to the concatination of filter and sort
        var newQuery = ''                                           // If none of the filter buttons or sorting buttons are clicked the variables will be empty 
         
        if(change !== ''){                                          // If the change variable is not empty a new filter has been set and 
            newQuery = change                                       // we need to send this change in query in to a new fetch
            this.props.fetchCourses(change, '') 
            
        } else{
            newQuery = this.props.query + concat                 // newQuery it set to the concatination of filter amd sort  
            this.props.fetchCourses(this.props.query, concat)       // The fetchCourses action is then run with the current query that is in state 
                        }                                           // and the new query that should be added to the current
                                                                    
        this.props.setQuery(newQuery)                               // setQuery is run and updates the query variable in state to the current plus the new query
        this.props.toggleFilter(this.props.check)                   // These functions runs a new search with the new query and therefor the filter menu
                                                                    // needs to be toggled to keep the current state its in    
    }
    
    /*
    Reset filter runs fetCourses with the original input and 
    and empty string such that the query is set to what was originally written into the searchbar
    This also has to toggle the filtermenu state and updates the query to only be the input again
    */
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

    /*
    handleToggle is run when clicking on the fitler icon
    This first checks if the check variable is false and the filtermenu thus not open
    If so the class 'foot-display needs to be added and the 'footer' needs to be removed 
    These classes controls the visibility if the menu
    */
    handleToggle = () => {
        if (!this.props.check){
            this.refs.foot.classList.add('foot-display');
            this.refs.foot.classList.remove('footer');
        }

        // changes the check variable(boolean) in state to be the opposite of what is set in input
       this.props.toggleFilter(this.props.check)
    }

    
   
    render() {
    // Checks if any of the buttons is clicked in the filter menu. If so a reset button has to appear to 
    // be able to reset the filter.
    let resetButton = this.props.spring_is_clicked | this.props.fall_is_clicked | this.props.code_is_clicked | this.props.name_is_clicked
    const reset = resetButton ? <button id="applybutton" className="btn apply" onClick={this.resetFilter}>RESET FILTER</button>: null;

    return (
        <div>
      
         {/*Animated is a component from the react-animated-css library that takes care of the animation of the pop-up filter menu  */}
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
                                {/* If a button is clicked it needs to change is class for styling to clicked */}
                                <button className={"btn " + (this.props.fall_is_clicked ? "clicked": "sort-button")} onClick={this.onFClicked}>FALL</button>
                                <button className={"btn " + (this.props.spring_is_clicked ? "clicked": "sort-button")} onClick={this.onSClicked}>SPRING</button>
                                
                            </div>     
                        </div>
                        
                        <div className="col-2">
                            <div className="row apply-wrap">
                                <button id="applybutton" className="btn apply" onClick={this.applyFilter}>APPLY</button>
                                {/* If  a button ios clicked in the filter menu a reset button will appear here */}
                                {reset}
                            </div>
                        </div>

                        <div className="col-5 text-center">
                            <h3 className="sort-text">Sort</h3>
                            <div className="button-wrap">
                                {/* If a button is clicked it needs to change is class for styling to clicked */}
                                <button className={"btn " + (this.props.code_is_clicked ? "clicked": "sort-button")} onClick={this.onCodeClicked}>CODE</button>
                                <button className={"btn " + (this.props.name_is_clicked ? "clicked": "sort-button")} onClick={this.onNameClicked}>NAME</button>
                            </div>
                        </div>

                   </div> 
                   
                </div>
            </div>  
        </div>     
        </Animated>
           
        <div className="foot-filter fixed-bottom text-center">
            <h3 className="center">FILTER SEARCH</h3>
        </div>
        {/* Button for toggling the filter menu. Icon from material-icons library */}
        {/* <button ref="filterButton" id="but" onClick={this.handleToggle} className="btn btn-info fixed-bottom">
                <i id="tune" className="large material-icons">tune</i>      
               

                
        </button> */}
        <button ref="filterButton" id="but" onClick={this.handleToggle} className="btn btn-info fixed-bottom">
                <i id="tune" className="large material-icons">tune</i>           
        </button>
        
       

      </div>
      
    );
  }
}

// mapStateToProps extracts all state variables we want to use in this class to props we can easily use
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
