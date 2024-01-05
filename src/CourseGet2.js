import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button';
class CourseGet2 extends React.Component {
    constructor(){
        super();
         this.state={
            courses:[]
         };
    }
    componentDidMount() {
        let urld = "https://localhost:44354/api/Courses";
        fetch(urld)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                courses: result
              });
            }
          );
      }

    render(){
         return (<div>

            <h2>Courses<Button href="/CoursePost">New Course</Button></h2>
            <table className="table">
                <thead>
                    <tr className="table-active">
                        <th>Course-Id</th>
                        <th>Course-Name</th>
                        <th>Course-Description</th>
                        <th>Course-duration</th>
                        <th>Course-fees</th>
                        <th>Course-syllabus</th>
                        <th>Age-grp-type</th>
                        <th>Course-is-active</th>
                        <th>Cover-photo</th>
                        <th>video</th>
                    </tr>
                </thead>
                <tbody>
    
                    {this.state.courses.map(course =>(
                        
                      <tr key={course.course_id}>
                            <td>{course.course_id}</td>
                            <td>{course.course_name}</td>
                            <td>{course.course_description}</td>
                            <td>{course.course_duration}</td>
                            <td>{course.course_fees}</td>
                            <td>{course.course_syllabus}</td>
                            <td>{course.age_grp_type}</td>
                            <td>{course.course_is_active}</td>
                            <td>{course.cover_photo}</td>
                            <td>{course.video_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    
        );
    }
}
export default CourseGet2;