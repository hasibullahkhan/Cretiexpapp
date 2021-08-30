import React, { Component,useStyles } from 'react'
import "./CertficateEntryStyle.css"
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { Button } from '@material-ui/core'



export class CertificateEntrya extends Component {

    constructor() {
    super();
    this.state = {
    };
    this.onInputchange = this.onInputchange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmitForm() {
    console.log(this.state)
  }

            

    render() {
        return (
            <div className="card">
            <h3 >Certificate Entry</h3>
            <FormGroup className="MuiFormGroup-options" row>
            <FormControl variant="standard">
            <TextField name="Certificate" value={this.state.Certificate} onChange={this.onInputchange}id="Certificate#" label= 'Certificate#' variant="outlined" />
            <TextField name="Vender" value={this.state.Vender}  onChange={this.onInputchange} id="Vender#" label='Vender#' variant="outlined" />
            <TextField name="Item" value={this.state.Item}  onChange={this.onInputchange} id="Item" label='Item#' variant="outlined" />
            <TextField type="Number" name="Amount" value={this.state.Amount}  onChange={this.onInputchange} id="Amount" label='Amount' variant="outlined" />
            <TextField  type="Number" name="TotalNotification" value={this.state.TotalNotification}  onChange={this.onInputchange} id="Vender#" label='Total Notification' variant="outlined" />
            <TextField disabled type="Number" name="No of Notification Send" value={this.state.NotificationSend}  onChange={this.onInputchange} id="Vender#" label='No of Notification Send' variant="outlined" />
             <TextField
                            id="sdate"
                            name="sdate"
                        label="Stat Date"
                        type="date"
                        defaultValue="2021-08-25"
                            value={this.state.sdate}
                            onChange={this.onInputchange}
                            onClick={this.onInputchange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                        <TextField
                            id="edate"
                            name="edate"
                        label="End Date"
                        type="date"
                        defaultValue="2021-08-25"
                            value={this.state.edate}
                            onChange={this.onInputchange}
                            onClick={this.onInputchange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    
                    </FormControl>
             <div>
            <Button variant="contained" color="primary" onClick={this.onSubmitForm}>Submit</Button>
        </div>
                </FormGroup>
            </div>
        )
    }
}

export default CertificateEntrya
