import React from 'react';
import './InputLista.css';

function InputLista(props) {

    // const equipos = [
    //     'Programación',
    //     'Front End',
    //     'Data Science',
    //     'Devops',
    //     'UX y Diseño',
    //     'Móvil',
    //     'Innovación y  Gestión',
    // ]


    const manejarCambio = (e) => {
        // console.log(e.target.value);
        props.actualizarValor(e.target.value);
    }

    return (
        <div class="form-label">
            <label>Equipo</label>
            <select class="form-control" defaultValue='Seleccionar equipo' onChange={manejarCambio}>
                <option disabled hidden id='select'>Seleccionar equipo</option>
                {
                    props.equipos.map((equipos, index) => {
                        return(
                            <option key={index}>{equipos}</option>
                        )
                    })
                }
            </select>
        </div>
    );
}

export default InputLista;