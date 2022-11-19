import React, {Component} from 'react';
import Buscador from './componentes/Buscador';
import Resultado  from './componentes/Resultados';
class App extends Component {
  //creamos el objeto state
  state = {
    termino : '', 
    imagenes : [],
    pagina : ''
  }

scroll = () => {
  const elemento = document.querySelector('.jumbotron');
  elemento.scrollIntoView('smooth', 'start');
}
  
  paginaAnterior = () => {
      //leer el state de la página actual
      let pagina= this.state.pagina;
       //si la página es uno ya no ir hacia atrás
      if(pagina ===1)return null;
      //sumar uno a la pagina actual
      pagina -=1;  
      //agregar el cambio al state
      this.setState({
        pagina
      }, () => {
          this.consultarApi();
          this.scroll();

      });

      //console.log(pagina);
  }
  paginaSiguiente = () => {
    //leer el state de la página actual
    let pagina= this.state.pagina;
    //sumar uno a la pagina actual
    pagina +=1;
    //agregar el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });

    //console.log(pagina);
  }

  consultarApi = () => {
    const termino=this.state.termino;
    const pagina= this.state.pagina;

    const url = `https://pixabay.com/api/?key=30715967-5ba022496f0ac17e98129ea0d&q=${termino}}&image_type=photo&pretty=true&page=${pagina}`;
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({imagenes : resultado.hits}))
  }

  datosBusqueda = (termino) => {
      this.setState({
        termino: termino,
        pagina:1     
    },()=>{
      this.consultarApi();
      this.scroll();

    })
  }

  render() {
    return (
      <div className='app container'>
        <div className="jumbotron">
          <br/><p className="lead text-center">Buscador de imágenes</p>
          <Buscador 
            datosBusqueda={this.datosBusqueda}
          />             
        </div>
        <div className='row justify-content-center'>
            <Resultado
              imagenes={this.state.imagenes}
              paginaAnterior={this.paginaAnterior}
              paginaSiguiente={this.paginaSiguiente}

            />   
        </div>  
      </div>
    );
  }
}
export default App;