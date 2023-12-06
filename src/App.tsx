import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="center-content">
      <Title />
      {!exibirFormulario && (
        <>
          <button className="button" onClick={ toggleFormulario }>
            Cadastrar nova senha
          </button>
          {listaSenhas.length ? (
            listaSenhas.map((lista) => (
              <div key={ lista.nomeServico } className="list-item">
                <a href={ lista.url }>
                  {' '}
                  Serviço:
                  {' '}
                  {lista.nomeServico}
                </a>
                <p>
                  {' '}
                  Usuário:
                  {' '}
                  {lista.login}
                </p>
                <p>
                  Senha:
                  {' '}
                  {lista.senha}
                </p>
              </div>
            ))
          ) : (
            <p className="no-password-message">Nenhuma senha cadastrada</p>
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
