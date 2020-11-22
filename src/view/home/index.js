import React from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';

/* Components */
import Navbar from '../../components/navbar/'
import Slide from '../../components/slide/'
import Card from '../../components/card/'
import FullCard from '../../components/fullCard/'

function Home(){
    return (
        <> 
            <Navbar/>
            <div className="container">
                <Slide/>
                <div className="cont_fullCard">
                    <FullCard/>
                    <FullCard/>
                    <FullCard/>
                </div>
                <div className="cont_fullCard">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                
            </div>
        </>
    ) 
}

export default Home;