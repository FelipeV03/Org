import React from 'react';
import './MiOrg.css';

function MiOrg(props) {
    return (
        <div className='orgSection'>
            <h3>Mi organización</h3>
            <img  src='./img/add.png' alt='add' onClick={props.manejarClick}/>
        </div>
    );
}

export default MiOrg;