
import React, { Component} from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';
class App extends Component {
  state = {
    termino : '',
    imagenes : [],
    pagina : '',
  }
  render() { 
    return(
      <div className='app container'>
        <div className='jumbotron'>
          <p className='lead text-center'>Buscador de Imagenes</p>
          <Buscador datosBusqueda={this.datosBusqueda}></Buscador>
        </div>
        <div className='row justify-content-center'>
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}

          />
        </div>
      </div>
    )
    
  }
}



export default App;
