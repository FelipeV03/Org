import React from 'react';
import './Colaborador.css';

import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

function Colaborador(props) {

    // const { id } = props.datos;
    // console.log(id);

    const { eliminarColaborador } = props;

    return (
        <div className='colaborador'>
            <div class="card" style={{ width: '18rem' }}>
                <div className='encabezado' style={{ backgroundColor: props.colorPrimario }}>
                    <AiFillCloseCircle className='eliminar' onClick={() => eliminarColaborador(props.datos.id)} style={{height: "27px", width: "30px"}}/>
                    <img src={props.foto} class="card-img-top" alt={props.nombre} />
                </div>
                <div class="card-body">
                    <h4 class="card-title">{props.nombre}</h4>
                    <p class="card-text">{props.puesto}.</p>
                    <div className='likes'>
                        {
                            props.datos.fav
                            ? <AiFillHeart onClick={() => props.like(props.datos.id)} className='like' color='red' style={{height: "25px", width: "25px"}}/>
                            :<AiOutlineHeart onClick={() => props.like(props.datos.id)} className='like' style={{height: "25px", width: "25px"}}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Colaborador