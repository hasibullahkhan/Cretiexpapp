import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
export default function Dateinput1({ caption }) {
    const classes = useStyles();
    return (

        <TextField
            id="date"
            label={caption}
            type="date"
            defaultValue="2021-08-25"
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
        />
    )
}
