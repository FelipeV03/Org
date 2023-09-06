// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg/MiOrg';
import Equipos from './components/Equipos/Equipos';
import Footer from './components/Footer/Footer';

function App() {

  // console.log(uuid());

  const [mostrar, setMostrar] = useState(false);
  const manejarClick = () => {
    setMostrar(!mostrar)
  }

  const [colaboradores, setColaboradores] = useState([
    {
      id: uuid(),
      name: 'Felipe Vargas',
      puesto: 'Developer Full Stack',
      foto: 'https://github.com/felipev03.png',
      equipo: 'Programación',
      fav: true
    },
    {
      id: uuid(),
      name: 'Felipe Vargas',
      puesto: 'Developer Full Stack',
      foto: 'https://github.com/felipev03.png',
      equipo: 'Front End',
      fav: true
    },
    {
      id: uuid(),
      name: 'Felipe Vargas',
      puesto: 'Developer Full Stack',
      foto: 'https://github.com/felipev03.png',
      equipo: 'UX y Diseño',
      fav: false
    },
    {
      id: uuid(),
      name: 'Felipe Vargas',
      puesto: 'Developer Full Stack',
      foto: 'https://github.com/felipev03.png',
      equipo: 'Programación',
      fav: false
    },
    {
      id: uuid(),
      name: 'Felipe Vargas',
      puesto: 'Developer Full Stack',
      foto: 'https://github.com/felipev03.png',
      equipo: 'Devops',
      fav: true
    },
    {
      id: uuid(),
      name: 'Felipe Vargas',
      puesto: 'Developer Full Stack',
      foto: 'https://github.com/felipev03.png',
      equipo: 'Data Science',
      fav: false
    },
  ]);

  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: 'Programación',
      colorPrimario: '#57C278',
      colorSecundario: '#D9F7E9'
    },
    {
      id: uuid(),
      titulo: 'Front End',
      colorPrimario: '#82CFFA',
      colorSecundario: '#E8F8FF'
    },
    {
      id: uuid(),
      titulo: 'Data Science',
      colorPrimario: '#A6D157',
      colorSecundario: '#F0F8E2'
    },
    {
      id: uuid(),
      titulo: 'Devops',
      colorPrimario: '#E06B69',
      colorSecundario: '#FDE7E8'
    },
    {
      id: uuid(),
      titulo: 'UX y Diseño',
      colorPrimario: '#DB6EBF',
      colorSecundario: '#FAE9F5'
    },
    {
      id: uuid(),
      titulo: 'Móvil',
      colorPrimario: '#FFBA05',
      colorSecundario: '#FFF5D9'
    },
    {
      id: uuid(),
      titulo: 'Innovación y  Gestión',
      colorPrimario: '#FF8A29',
      colorSecundario: '#FFEEDF'
    }
  ])

  const registrarColaborador = (colaborador) => {
    // console.log('Colaborador registrado', colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }

  const eliminarColaborador = (id) => {
    // console.log('Colaborador eliminado', id);
    const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
      return(colaborador.id !== id);
    });
    setColaboradores(colaboradoresFiltrados);
  }

  const actualizarColor = (color, id) => {
    // console.log('Color actualizado', color, titulo);
    // console.log('Color actualizado', color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    })
    setEquipos(equiposActualizados);
  }

  const CrearEquipo = (NuevoEquipo) => {
    // console.log('Equipo creado', NuevoEquipo);
    setEquipos([...equipos, {...NuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
    // console.log('Like', id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    })
    setColaboradores(colaboradoresActualizados);
  }

  return (
    <div className="App">
      <Header />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* {mostrar ? <Formulario /> : <></>} */}

      {
        mostrar &&
        <Formulario
          equipos={equipos.map((equipos) => (equipos.titulo))}
          registrarColaborador={registrarColaborador}
          CrearEquipo={CrearEquipo}
        />
      }

      {/* {mostrar && <Formulario equipos={equipos.map((equipos) => {return(equipos.titulo)})}/>} */}
      <MiOrg manejarClick={manejarClick} />

      {
        equipos.map((equipos, index) => {
          return (
            <Equipos
              key={index}
              datos={equipos}
              titulo={equipos.titulo}
              colorPrimario={equipos.colorPrimario}
              colorSecundario={equipos.colorSecundario}
              colaboradores={colaboradores.filter((colaborador) => {
                return (colaborador.equipo === equipos.titulo);
              })}
              eliminarColaborador={eliminarColaborador}
              actualizarColor={actualizarColor}
              like={like}
            />
          )
        })
      }

      <Footer />
    </div>
  );
}

export default App;
