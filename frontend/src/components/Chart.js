import React, { PureComponent, Component} from 'react';
import {connect} from 'react-redux'
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'

class Chart extends Component {
    mapGradesToData = () => {
        try {
            const semesters = this.props.grades.docs[0].semesters
            const data = semesters.map((sem) => {
                return (
                    [   
                        {name: "A", value: sem.a},
                        {name: "B", value: sem.b}, 
                        {name: "C", value: sem.c},
                        {name: "D", value: sem.d}, 
                        {name: "E", value: sem.e},
                        {name: "F", value: sem.f}
                    ]
                )
            })
            return data
        }
        catch(err) {
            console.log(err)
        }
    }

  render() {
    const data = [   
        {"name": "A", value: 50},
        {"name": "B", value: 50}, 
        {"name": "C", value: 50},
        {"name": "D", value: 50}, 
        {"name": "E", value: 50},
        {"name": "F", value: 50}
    ]
    return (
        <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
    );
  }
}

const mapStateToProps = (state) => ({
    grades: state.grades.gradedata
})

export default connect(mapStateToProps)(Chart)
