import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {getCourse} from '../../actions/courseActions'
import {connect} from 'react-redux'

export class Courses extends Component {
    static propTypes = {
      courses:PropTypes.array.isRequired,
      getCourse:PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.getCourse();
        console.log('Done loadin')
    }
    handleClickCourse=event=>{
        console.log('Object fired')
    }
    render() {
        return (
            
            <div className="row col-md-9 m-auto p-20">
                {this.props.courses.map(course=>(
                      <div key={course.id} className="card col-md-3 mt-3 ml-2 mr-2 " onClick={this.handleClickCourse}>
                          <img src={course.image} alt="course" className="mt-3"/>
                          <h4>{course.title}</h4>
                          <p>{course.descritption}</p>
                      </div>    
                ))}  
            </div>
        )
    }
}

const mapStateToProps=state=>({
    courses:state.courses.courses
})

export default connect(mapStateToProps, {getCourse})(Courses);
