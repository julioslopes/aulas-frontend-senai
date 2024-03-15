import './App.css';
import Cabecalho from './Componentes/Cabecalho/Cabecalho';

import LadoEsquerdo from './Componentes/LadoEsquerdo/LadoEsquerdo';
import Principal from './Componentes/Principal/Principal';
import Rodape from './Componentes/Rodape/Rodape';

function App() {
  console.log('App render...');

  return (
    <>
      <Cabecalho/>
        <LadoEsquerdo />
        <Principal />
        <Rodape />
      </>
      );
}

      export default App;
