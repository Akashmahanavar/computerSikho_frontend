
 import React from "react";
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
 import Button from 'react-bootstrap/Button';
 import StaffPost from "./StaffPost";
 class StaffGet extends React.Component {
     constructor(){
         super();
          this.state={
             staffs:[]
          };
     }
     componentDidMount() {
         let urld = "http://localhost:8080/staffs";
         fetch(urld)
           .then(res => res.json())
           .then(
             (result) => {
               this.setState({
                 staffs: result
               });
             }
           );
       }
 
     render(){
          return (<div>
 
             <h2>Staff Data<Button href="/StaffPost">New staff</Button></h2>
             <table className="table">
                 <thead>
                     <tr className="table-active">
                         <th>Id</th>
                         <th>Name</th>
                         <th>Photo</th>
                         <th>Mobile</th>
                         <th>Email</th>
                         <th>Username</th>
                         <th>Password</th>
                     </tr>
                 </thead>
                 <tbody>
     
                     {this.state.staffs.map(staff =>(
                         
                       <tr key={staff.staffId}>
                             <td>{staff.staffId}</td>
                             <td>{staff.staffName}</td>
                             <td> <img src={staff.photoUrl} width={60} /></td>
                             <td>{staff.staffMobile}</td>
                             <td>{staff.staffEmail}</td>
                             <td>{staff.staffUsername}</td>
                             <td>{staff.staffPassword}</td>
                         </tr>
                     ))}
                 </tbody>
             </table>
         </div>
     
         );
     }
 }
 export default StaffGet;