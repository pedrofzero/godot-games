import React from 'react';
import { useState } from 'react';
import { Box, Typography, TextField, makeStyles } from '@material-ui/core'

const genres = 
    [
        "action", "sandbox", "shooter", "moba", "puzzles", "horror", "platformer"
    ]

    const useStyles = makeStyles((theme) => ({
        box: {
            textAlign: "center",
            marginTop: "200px"
        }        
      }));


function AddGameForm() {
    
    const classes = useStyles();
    const [name, setName] = useState('')
    
    return (
    <div>
        <Box
            component="form"
            noValidate
            autoComplete="off"
            className={classes.box}
        >
                       
        <TextField 
        required
        id="outline-required"
        label="Required"
        value={name}
        onChange={e => setName(e.target.value)}
        >
        


        </TextField>
        
        
        </Box>
    </div>
    )  
}

export default AddGameForm;
