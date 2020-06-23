import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {getLessons} from '../../actions/lessonActions'
import {connect} from 'react-redux'

export class Lessons extends Component {
    static propTypes = {
      lessons:PropTypes.array.isRequired,
      getLessons:PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.getLessons();
        console.log('Done loadin')
    }
  
    render() {
        return (
            
            <div className="row col-md-9 m-auto p-20">
                {this.props.lessons.map(lesson=>(
                      <div key={lesson.id} className="card col-md-3 mt-3 ml-2 mr-2 " >
                          <img src={lesson.image} alt="course" className="mt-3"/>
                          <h4>{lesson.title}</h4>
                          <p>{lesson.description}</p>
                      </div>    
                ))}  
            </div>
        )
    }
}

const mapStateToProps=state=>({
    lessons:state.lessons.lessons
})

export default connect(mapStateToProps, {getLessons})(Lessons);
