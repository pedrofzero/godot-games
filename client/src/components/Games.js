import React from 'react';
import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Box, Typography, Button } from '@material-ui/core'
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat( 4, minmax(250px, 1fr) )",

    },


    media: {
        height: 200
    }

  }));


function Games() {

    const classes = useStyles(); 

    // deal with API request 
    const [listOfGames, setListofGames] = useState([])
    
    useEffect( () => {
        Axios.get("http://localhost:5000/api/games").then((response) => {
        setListofGames(response.data)        
        })
    }, [])
    
    console.log(listOfGames)

    return (
        <div className={classes.grid}>
        
        {listOfGames.map((game) => (
            <Box px={2} my={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={game.img}
                  title={game.name}
                  component="img"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {game.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {game.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  More Information
                </Button>
                <Button size="small" color="primary">
                  Buy me!
                </Button>
              </CardActions>
            </Card>
            </Box>
        ))}
        </div>
    )
}

export default Games;



// <Grid 
// container
// //spacing={60}
// direction="row"
// alignItems="center"
// justifyContent="center"
// style={{ minHeight: "50vh"}}>

