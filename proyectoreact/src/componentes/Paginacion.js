import React from 'react';

const Paginacion = props =>{
    return(
        <div className='py-3'>
            <butthon onClick={props.paginaAnterior} type='button' className='btn btn-info mr-1'>Anterior &larr;</butthon>
            <butthon onClick={props.paginaSiguiente} type='button' className='btn btn-info'>Siguiente &larr;</butthon>
        </div>
    )
}
export default Paginacion;