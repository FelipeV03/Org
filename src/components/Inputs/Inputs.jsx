import React from 'react';
// import { useState } from 'react';
import './Inputs.css';

function Inputs(props) {
    // console.log(props);

    // const [valor, setValor] = useState('');
    const { type = 'text',} = props;
    // console.log(type);

    const manejarCambio = (e) => {
        // console.log(e.target.value);
        props.actualizarValor(e.target.value);
    }

    return (
        <div class="mb-3" id={type}>
            <label class="form-label">{props.titulo}</label>
            <input type={type} class="form-control" placeholder={props.placeholder} required={props.required} value={props.valor} onChange={manejarCambio}/>
        </div>
    );
}

export default Inputs;