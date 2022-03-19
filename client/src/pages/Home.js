import React from 'react';
import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner'
import Games from '../components/Games'


function Home() {
    return (
        <div>
        <Navbar/>
        <HeroBanner/>
        <Games/>
        </div>
    )
}

export default Home;