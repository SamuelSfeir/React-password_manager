import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';

function App() {
  const [exibirFormulario, setExibirFormulario] = useState(false);

  const toggleFormulario = () => {
    setExibirFormulario(!exibirFormulario);
  };

  const [listaSenhas, setListaSenhas] = useState<{
    nomeServico: string;
    login: string;
    senha: string;
    url: string;
  }[]>([]);

  return (
    <div>
      <Title />
      {!exibirFormulario && (
        <>
          <button onClick={ toggleFormulario }>
            Cadastrar nova senha
          </button>
          {listaSenhas.length ? (
            listaSenhas.map((lista) => (
              <div key={ lista.nomeServico }>
                <a href={ lista.url }>{lista.nomeServico}</a>
                <p>{lista.login}</p>
                <p>{lista.senha}</p>
              </div>
            ))
          ) : (
            <p>Nenhuma senha cadastrada</p>
          )}
        </>
      )}
      {exibirFormulario && <Form
        setListaSenhas={ setListaSenhas }
        toggleFormulario={ toggleFormulario }
      /> }
    </div>
  );
}

export default App;
