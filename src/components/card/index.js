import React from 'react';
import './card.css';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
function Card(){
    return (
        <>
        <div className="card">
            <img className="card__img" src="https://picsum.photos/200/300" alt="imagem do evento"/>
            <div className="card__text">
                <strong>Titulo</strong>
                <p>texto maneiro pra tentar ver se deu certo mano</p>
            </div> 
        </div>
       
        </>
    ) 
}

export default Card;