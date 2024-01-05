import { Component, react } from 'react'
import Staff from './Staff';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
class Followup extends Component {

    constructor() {
        super();
        this.state = {
            followups: [],
            temp: {}
        }
       
    }
   
    async componentDidMount() {
        let demo = JSON.stringify(this.state.temp);
        let urld = "http://localhost:8080/followups";

        await fetch(urld, {
            method: 'Post',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(res => res).then((result) => { console.log(result); });

        fetch(urld).then(r => r.json()).then(a => { this.setState({ followups: a }) ;console.log(a)});

    }
    render() {
        return (
            <div>
               
                <h2 className='title'>Followup Data...</h2>
                <div>
                <table className="table">
                    <thead>
                        <tr className="table-active">
                            <th>Followup_id</th>
                            <th>Enquiry_id</th>
                            <th>Staff_id</th>
                            {/* <th>Followup_id</th> */}
                            <th>followup_msg</th>
                            {/* <th>Staff_id</th> */}
                            <th>is_active</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.followups.map(enq => (
                            <tr key={enq.followupId}>
                                <td>{enq.followupId}</td>
                                <td>{enq.enquiry}</td>
                                <td>{enq.staff}</td>                        
                                {/* <td>{enq.followup_id}</td> */}
                                <td>{enq.followupMsg}</td>
                                {/* <td>{enq.staff_id}</td> */}
                                <td>{enq.isActive.toString()}</td>

                                {/* <td><a href={'/TakeFollowup/' + enq.followup_id}>Take_Followup</a></td> */}
                                <td> <Button href={"/TakeFollowup/" + enq.followupId}>TakeFollowup</Button></td>
                                {/* <td> <a href={'/enqloyeeUp/' + enq.Id}>Edit</a></td>
                                <td> <a href={'/enqloyeeDel/' + enq.Id}>delete</a></td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        );

    }
}
export default Followup;