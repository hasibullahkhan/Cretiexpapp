import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
// import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
// import KeyboardDatePickerExample from "./Dateinput1"
import Dateinput1 from "../CardCertificate/Dateinput1"
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core'
import "../CardCertificate/Certificate.css"

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));


const CertificateEntry = ({ head1, lbl1, lbl2, lbl3,lbl4,lbl5,lbl6}) => {
    const classes = useStyles();
    return (
        <div className="cardc">
            <h3 >{head1}</h3>
            <FormGroup className="MuiFormGroup-options" row>
                <FormControl variant="standard">
                    <TextField id="outlined-basic" label={lbl1} variant="outlined" />
                    <TextField id="outlined-basic" label={lbl2} variant="outlined" />
                    <TextField id="outlined-basic" label={lbl3} variant="outlined" />
                    <TextField  id="outlined-basic" label={lbl4} variant="outlined" />
                    <TextField  id="outlined-basic" label={lbl5} variant="outlined" />
                    <TextField  id="outlined-basic" label={lbl6} variant="outlined" />
                    
                    <TextField
            id="sdate"
            label="Stat Date"
            type="date"
            defaultValue="2021-08-25"
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
        />
        <TextField
            id="edate"
            label="End Date"
            type="date"
            defaultValue="2021-08-25"
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
        />
            <Button variant="contained" color="primary">
             Save
                </Button>       
                    
                        
                </FormControl>
            </FormGroup>


        </div>
    );


}

export default CertificateEntry;

