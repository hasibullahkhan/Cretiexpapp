import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

import TextField from '@material-ui/core/TextField';

import "../CardCertificate/ItemMaster.css"

const ItemMasterEntry = ({ head1, lbl1, lbl2, lbl3 }) => {

    return (
        <div className="card1">
            <h3>{head1}</h3>
            <FormGroup className="MuiFormGroup-options" row>
                <FormControl variant="standard">
                    <TextField id="outlined-basic" label={lbl1} variant="outlined" />
                    <TextField id="outlined-basic" label={lbl2} variant="outlined" />
                    <TextField id="outlined-basic" label={lbl3} variant="outlined" />
                    
                </FormControl>
            </FormGroup>


        </div>
    );


}

export default ItemMasterEntry;

