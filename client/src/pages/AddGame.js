import '../App.css';
import React from 'react';
import { Typography } from '@material-ui/core'
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner'
import AddGameForm from '../components/AddGameForm'

function AddGame() {
    return (
        <div>
            <Navbar/>
            <HeroBanner/>

            <Typography style={{textAlign: "center", marginTop: "50px"}} variant="h3">Add your game!</Typography>

            <AddGameForm/>


        </div>
    )
}

export default AddGame;