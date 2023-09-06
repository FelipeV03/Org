import React from 'react';
import './Equipos.css';
import Colaborador from '../Colaborador/Colaborador';
import hexToRgba from 'hex-to-rgba';

function Equipos(props) {
    // console.log(props.datos);

    // Restructuración de objetos
    const { id } = props.datos;
    // console.log(id);
    const { actualizarColor } = props;

    return (
        <>
            {
                props.colaboradores.length > 0 &&
                <div className='equipo' style={{ backgroundColor: hexToRgba(props.colorPrimario, 0.6) }}>
                    <input
                        type='color'
                        value={props.colorPrimario}
                        className='color'
                        onChange={(e) => {
                            // console.log(e.target.value);
                            actualizarColor(e.target.value, id);
                        }}
                    />
                    <h3 style={{ borderColor: props.colorPrimario }}>{props.titulo}</h3>
                    <div className='colaboradores'>
                        {
                            props.colaboradores.map((colaborador, index) => {
                                return (
                                    <Colaborador
                                        key={index}
                                        foto={colaborador.foto}
                                        nombre={colaborador.name}
                                        puesto={colaborador.puesto}
                                        colorPrimario={props.colorPrimario}
                                        eliminarColaborador={props.eliminarColaborador}
                                        datos={colaborador}
                                        like={props.like}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            }
        </>
    );
}

export default Equipos;