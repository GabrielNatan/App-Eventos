import React from 'react';
import './fullCard.css';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
function FullCard(){
    return (
        <>
        <div className="fullCard">
            <img className="card__img" src="https://picsum.photos/200/300" alt="imagem do evento"/>
            
        </div>
       
        </>
    ) 
}

export default FullCard;