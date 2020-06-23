import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {getCourse} from '../../actions/courseActions'
import {connect} from 'react-redux'
import {getLessons} from '../../actions/lessonActions'
import {Redirect,Link} from 'react-router-dom'

export class Courses extends Component {
    static propTypes = {
      courses:PropTypes.array.isRequired,
      getCourse:PropTypes.func.isRequired,
      getLessons:PropTypes.func.isRequired,
    }

    componentDidMount(){
        this.props.getCourse();
    }

    render() {
        return (
            
            <div className="row col-md-9 m-auto p-20">
                {this.props.courses.map(course=>(
                        <div key={course.id} className="card col-md-3 mt-3 ml-2 mr-2 " >
                             <Link className="" to={`/${course.slug}/lessons`}>
                                <img className="mt-3 styled-image" src={course.image} alt="course"/></Link>
                                {/* an anchor tag can also work on this  */}
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

export default connect(mapStateToProps, {getCourse, getLessons})(Courses);
