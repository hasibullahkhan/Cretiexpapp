import React, { Component } from 'react'
import {Table} from 'react-bootstrap'

export default class Department extends Component {
    
    constructor(props) {
        super(props);
        this.state={deps:[]}

    }
    refreshList() {
        fetch(process.env.REACT_APP_API + 'Emplayee')
            .then(response => response.json())
            .then(data => {
                this.setState({ deps: data });
// console.log(deps);
            })
        
       
    }

    componentDidMount() {
        this.refreshList();
    }
    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { deps } = this.state
        console.log(deps);
        
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>DepartmentId</th>
                        <th>DepartmentName</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep =>
                            <tr key={dep.EmployeeId}>
                                <td>{dep.EmployeeId}</td>
                                <td>{dep.EmployeeName}</td>
                                <td>Edit / Delete</td>
                            </tr>
                            )}
                    </tbody>
                </Table>
                
            </div>
        )
    }
}
