import React, { useState } from 'react';

function Form() {
  const [exibirFormulario, setExibirFormulario] = useState(false);

  // Estados para cada campo do formulário
  const [nomeServico, setNomeServico] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [url, setURL] = useState('');

  const toggleFormulario = () => {
    setExibirFormulario(!exibirFormulario);
  };

  const cancelarFormulario = () => {
    setExibirFormulario(false);
    // Limpar os estados dos campos ao cancelar o formulário
    setNomeServico('');
    setLogin('');
    setSenha('');
    setURL('');
  };

  const contemNumeros = (str: string) => /\d/.test(str);
  const contemLetras = (str: string) => /[a-zA-Z]/.test(str);
  const contemCaracteresEspeciais = (str: string) => /[!@#$%^&*(),.?":{}|<>]/.test(str);

  const isDisabled = nomeServico.length === 0
  || senha.length < 8
  || senha.length > 16
  || login.length === 0
  || !contemNumeros(senha)
  || !contemLetras(senha)
  || !contemCaracteresEspeciais(senha);

  const isSenhaValida = senha.length >= 8;
  const isSenhaValida2 = senha.length <= 16;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      {!exibirFormulario && (
        <button onClick={ toggleFormulario }>Cadastrar nova senha</button>
      )}

      {exibirFormulario && (
        <form className="form" onSubmit={ handleSubmit }>
          {/* Conteúdo do seu formulário aqui */}
          <label htmlFor="nome-do-servico">Nome do serviço</label>
          <input
            type="text"
            name="nome-do-servico"
            id="nome-do-servico"
            value={ nomeServico }
            onChange={ (e) => setNomeServico(e.target.value) }
          />

          <label htmlFor="login">Login</label>
          <input
            type="text"
            name="login"
            id="login"
            value={ login }
            onChange={ (e) => setLogin(e.target.value) }
          />

          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            value={ senha }
            onChange={ (e) => setSenha(e.target.value) }
          />
          {isSenhaValida ? (
            <p className="valid-password-check">Possuir 8 ou mais caracteres</p>
          ) : (
            <p className="invalid-password-check">Possuir 8 ou mais caracteres</p>
          )}
          {isSenhaValida2 ? (
            <p className="valid-password-check">Possuir até 16 caracteres</p>
          ) : (
            <p className="invalid-password-check">Possuir até 16 caracteres</p>
          )}

          <label htmlFor="URL">URL</label>
          <input
            type="text"
            name="URL"
            id="URL"
            value={ url }
            onChange={ (e) => setURL(e.target.value) }
          />

          <button type="submit" name="Cadastrar" disabled={ isDisabled } id="cadastrar">
            Cadastrar
          </button>
          <button type="button" onClick={ cancelarFormulario }>
            Cancelar
          </button>
        </form>
      )}
    </div>
  );
}

export default Form;
