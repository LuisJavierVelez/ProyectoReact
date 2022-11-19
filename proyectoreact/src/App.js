
import React, { Component} from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';
class App extends Component {
  state = {
    termino : '',
    imagenes : [],
    pagina : '',
  }
  scroll = () => { 
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start');
  }
  paginaAnterior = () => {
    let pagina = this.state.pagina;
    if(pagina === 1)return null;
    pagina -=1;
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
  }
  paginaSiguiente = () => {
    let pagina = this.state.pagina;
    if(pagina === 1)return null;
    pagina +=1;
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
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
