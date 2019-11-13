import React, { Component} from 'react';
import {connect} from 'react-redux'
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'
import Spinner from 'react-bootstrap/Spinner'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import {setChosenSemester} from '../actions/semesterAction'


class Chart extends Component {

    /*
    Checks if grades is done loading. If so it maps all different grade-data 
    in each semester to a data-array. This array then contains how many A´s, B´s and so on
    there were on the exam thats connected to that semester.
    */
    mapGradesToData = (semcode) => {
    
        if (!this.props.loading) {
            try {
                const semesters = this.props.grades[0].semesters
                let data = []
                semesters.map((sem) => {
                    if (sem.semester_code === semcode) {
                        data.push(
                            [  
                                {"name": "A", "Antall": sem.a},
                                {"name": "B", "Antall": sem.b}, 
                                {"name": "C", "Antall": sem.c},
                                {"name": "D", "Antall": sem.d}, 
                                {"name": "E", "Antall": sem.e},
                                {"name": "F", "Antall": sem.f}
                            ]
                        )   
                    }
                })
                return data
            }
            catch(err) {
                console.log(err)
            }
        }
    }

    /*
    Fetches all the semester codes (e.g. "V2017") into a list.
    If a active semster is not chosen it sets the first available semstercode to be the active semster.
    Returns the list of semester codes
    */
    getSemesterCodes = () => {
        if (!this.props.loading) {
            try {
                let semesterCodes = this.props.grades[0].semesters.map(sem => sem.semester_code)
                if (!this.props.activeSemester) {
                    this.props.setChosenSemester(semesterCodes[0]) 
                }
                
                return semesterCodes.sort(function(a, b) {return (a.slice(1) - b.slice(1))}).reverse()
            }
            catch (err) {
                console.log(err)
            }
        }
        return []
    }

    /*
    If there is a change in the dropdown menu in the grades modal this function is run.
    The activesemester state(which decides which chart to show) is then set to the chosen semester
    */
    handleChange = (e) => {
            console.log("Value: ", e.target.innerHTML)
            this.props.setChosenSemester(e.target.innerHTML) 
        
    }
   
    /*
    Here each semestercode is mapped to a dropdown item and is put inside a dropdown menu.
    It returns the dropdown menu and runs the renderchart method
    */
    renderDropdown = () => {
        console.log(this.props.activeSemester)
        let semesterCodes = this.getSemesterCodes()
        let dropdown =  semesterCodes.map(code => 
                <Dropdown.Item eventKey={code} value={code} onClick={this.handleChange}  >
                {code}
                </Dropdown.Item> )
            return (
                <div>
                    {this.renderChart(this.props.activeSemester)}
                    <Dropdown>
                        <DropdownButton id="semesters" title="Semester" >
                            {dropdown}
                        </DropdownButton>
                    </Dropdown>
                </div>
            )
        }
       
        
    
    
    /*
    This function checks if the grade-data has loaded and thereby creates a chart with all the grade-statsx
     */
    renderChart = (semester_code) => {
        if (!this.props.loading) {
            const data = this.mapGradesToData(semester_code)
            return (
                <div>
                    <h2>{this.props.activeSemester}</h2>
                <BarChart width={730} height={250} data={data[0]}>
                    
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Antall" fill="#8884d8" />
                </BarChart>
                </div>
            )
        }
        return (
        //  If the grades data is loading a spinner will apear.   
        <div className="spinner-container"><Spinner id="loading-spinner" animation="border" variant="light" /></div>
        )
    }


    render(){
    return (
        <div>
            {this.renderDropdown()}
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
    grades: state.grades.gradedata,               // gradedata in state
    loading: state.grades.loading,                // If data is loding or not
    activeSemester: state.semester.activeSemester // Which semester to show stats on in chart
})


export default connect(mapStateToProps, {setChosenSemester})(Chart)
