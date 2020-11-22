import React from 'react';
import './slide.css';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import teacher1 from "./02-img.jpg";
import teacher2 from "./03-img.jpg";
import teacher3 from "./04-img.jpg";


function Slide(){
    function moveSlide(){
        setTimeout(() => {
            let slide = document.querySelector('.slide').offsetWidth;
            let ul = document.querySelector('.slide ul');
            let li = document.querySelectorAll('.slide ul li');
            let i = 0;
            setInterval(() => {
                
                if(i< li.length){
                    ul.style.left = `-${slide * i}px`
                    i++
                }else{
                    i = 0
                }
                
            }, 2000);
            
        }, 200);
        
    }

    
    return (
        <> 
            <div className="slide">
                <ul>
                    
                    <li><img src={teacher1}/></li>
                    <li><img src={teacher2}/></li>
                    <li><img src={teacher3}/></li>
                    
                </ul>
                
            </div>
            <div className="prev">
                    <span className="active"></span>
                    <span></span>
                    <span></span>
                </div>
            {moveSlide()}
        </>
    ) 
}

export default Slide;