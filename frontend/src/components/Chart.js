import React, { PureComponent, Component} from 'react';
import {connect} from 'react-redux'
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Label} from 'recharts'
import Spinner from 'react-bootstrap/Spinner'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import {setChosenSemester} from '../store/semesterAction'

// import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";


class Chart extends Component {

    
    mapGradesToData = (semcode) => {
        if (!this.props.loading) {
            try {
                const semesters = this.props.grades[0].semesters
                let data = []
                semesters.map((sem) => {
                    if (sem.semester_code ==  semcode) {
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

    getSemesterCodes = () => {
        if (!this.props.loading) {
            try {
                let semesterCodes = this.props.grades[0].semesters.map(sem => sem.semester_code)
                if (!this.props.activeSemester) {
                    this.props.setChosenSemester(semesterCodes[0]) 
                }
                
                return semesterCodes
            }
            catch (err) {
                console.log(err)
            }
        }
        return []
    }

    handleChange = (e) => {
            console.log("Value: ", e.target.innerHTML)
            this.props.setChosenSemester(e.target.innerHTML) 
        
    }
   
    renderDropdown = () => {
        console.log(this.props.activeSemester)
        let semesterCodes = this.getSemesterCodes()
        let dropdown =  semesterCodes.map(code => 
                <Dropdown.Item eventKey={code} value={code} onClick={this.handleChange} >
                {code}
                </Dropdown.Item> )
            return (
                <div>
                    {this.renderChart(this.props.activeSemester)}
                    <Dropdown >
                        <DropdownButton id="semesters" title="Semester" >
                            {dropdown}
                        </DropdownButton>
                    </Dropdown>
                </div>
            )
        }
       
        
    
    

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
        //     <Spinner animation="border" variant="light"/>
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
    grades: state.grades.gradedata,
    loading: state.grades.loading,
    activeSemester: state.semester.activeSemester
})


export default connect(mapStateToProps, {setChosenSemester})(Chart)
