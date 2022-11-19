
import React, { Component} from 'react';
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
        </div>
      </div>
    )
    
  }
}



export default App;
