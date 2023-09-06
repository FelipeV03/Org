import React from 'react';
import { useState } from 'react';

import './Formulario.css';
import Inputs from '../Inputs/Inputs';
import InputLista from '../InputLista/InputLista';

function Formulario(props) {

    const [valorName, setValorName] = useState('');
    const [valorPuesto, setValorPuesto] = useState('');
    const [valorFoto, setValorFoto] = useState('');
    const [valorLista, setValorLista] = useState('');

    const [ valorTitulo, setValorTitulo ] = useState('');
    const [ valorColor, setValorColor ] = useState('');

    const envioFormulario = (e) => {
        e.preventDefault();
        // console.log("manejando envió");
        const colaborador = {
            name: valorName,
            puesto: valorPuesto,
            foto: valorFoto,
            equipo: valorLista,
        }
        // console.log(colaborador);
        props.registrarColaborador(colaborador);
        alert(`El colaborador ${valorName} ha sido creado`);

        setValorName('');
        setValorPuesto('');
        setValorFoto('');
        setValorLista('');
    }

    const envioFormularioEquipo = (e) => {
        e.preventDefault();
        // console.log("manejando envió");
        const equipo = {
            titulo: valorTitulo,
            colorPrimario: valorColor,
        }
        // console.log(equipo);
        props.CrearEquipo(equipo);
        alert(`El equipo ${valorTitulo} ha sido creado`);

        setValorTitulo('');
        setValorColor('');
    }

    return (
        <div class="container">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item" id='itemAcordion'>
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Nuevo Colaborador
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <form className='formulario' onSubmit={envioFormulario}>
                            <Inputs
                                titulo='Nombre'
                                placeholder='Ingrese Nombre'
                                required
                                valor={valorName}
                                actualizarValor={setValorName}
                            />
                            <Inputs
                                titulo='Puesto'
                                placeholder='Ingrese Puesto'
                                required
                                valor={valorPuesto}
                                actualizarValor={setValorPuesto}
                            />
                            <Inputs
                                type='url'
                                titulo='Foto'
                                placeholder='Ingrese enlace de Foto'
                                required
                                valor={valorFoto}
                                actualizarValor={setValorFoto}
                            />
                            <InputLista
                                valor={valorLista}
                                required
                                actualizarValor={setValorLista}
                                equipos={props.equipos}
                            />
                            <button type="submit" class="btn btn-primary btn-block"> Crear </button>
                        </form>
                    </div>
                </div>

                <div class="accordion-item" id='itemAcordion'>
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            Nuevo Equipo
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <form className='formulario' onSubmit={envioFormularioEquipo}>
                            <Inputs
                                titulo='Titulo'
                                placeholder='Ingrese Titulo'
                                required
                                valor={valorTitulo}
                                actualizarValor={setValorTitulo}
                            />
                            <Inputs
                                type='color'
                                titulo='Color'
                                placeholder='Ingrese Color en Hexadecimal'
                                required
                                valor={valorColor}
                                actualizarValor={setValorColor}
                            />
                            <button type="submit" class="btn btn-primary btn-block"> Crear Equipo </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Formulario;