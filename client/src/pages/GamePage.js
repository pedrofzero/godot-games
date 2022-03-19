import React from 'react';
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Navbar from '../components/Navbar';

function GamePage() {

    let { id } = useParams();
    
    const [game, setGame] = useState([])
  
    useEffect( () => {
        Axios.get(`http://localhost:5000/api/games/${id}`).then((response) => {
        setGame(response.data)        
        })
    }, [])

    const currentGame = game[0];

    return(
        <>
        <Navbar/>
        
        </>
    )
}

export default GamePage;