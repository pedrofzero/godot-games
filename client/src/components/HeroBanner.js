import React from 'react';
import { Typography, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    banner: {
        width: "100%",
        height: "493px",
        backgroundColor: "#EDEDED"
    },

    godotImg: {
        width: "224px",
        height: "224px",
        float: "right",
        marginTop: "125px",
        marginRight: "150px"
    },
    
    bannerText: {
        fontWeight: "bold",
        position: "absolute",
        marginTop: "150px",
        marginLeft: "100px"
    },

    secondaryBannerText: {
        fontWeight: "regular",
        position: "absolute",
        marginTop: "280px",
        marginLeft: "100px"
    }
  }));

function HeroBanner() {
    
    const classes = useStyles(); 
    
    return (
        <div>
            <Box className={classes.banner}>
            <div>
                <Typography className={classes.bannerText} variant="h3">Get to know the best games,<br/> made in Godot!</Typography>
                <Typography className={classes.secondaryBannerText}>Godot Games is a place for you to find all sorts of games <br/> made in the Godot Game Engine.</Typography>
            </div>    
            <div>
                <img className={classes.godotImg} src="/images/godot.png" alt="hi"></img>
            </div>
            
                </Box>
            </div>
    )
}

export default HeroBanner;