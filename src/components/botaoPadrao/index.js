import React from 'react';
import './botaoPadrao.css';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
function Botao(){
    return (
        <>
            <button type="button" className="btn">
                Ver mais
            </button>
       
        </>
    ) 
}

export default Botao;