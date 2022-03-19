import React from 'react';
import {AppBar, Toolbar, Typography, makeStyles, Box } from '@material-ui/core'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: "transparent",
        color: "black",
        boxShadow: "0px 0px 0px 0px",
        justifyContent: "space-between"
    },
    navLinks: {
      color: "black",
      fontWeight: "bold",
      textAlign: "right",
      display: "inline-flex",
      marginRight: "10px"
    }
  }));

function Navbar() {

    const classes = useStyles();

    return(
        <div>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar className={classes.header}>
            <Typography variant="h6"><Link to="/">Godot Games</Link> </Typography>
            <div className={classes.navLinks}>
            <Typography variant="h6"> <Link to="/addgame">Add Game</Link> </Typography>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
    </div> 
    )
}
 
export default Navbar;