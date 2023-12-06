import React, { useState } from 'react';
import './Form.css';

type FormProps = {
  toggleFormulario: () => void
  setListaSenhas: React.Dispatch<React.SetStateAction<{
    nomeServico: string;
    login: string;
    senha: string;
    url: string;
  }[]>>
};

function Form(props: FormProps) {
  const { toggleFormulario, setListaSenhas } = props;

  // Estados para cada campo do formulário
  const [nomeServico, setNomeServico] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [url, setURL] = useState('');

  const cancelarFormulario = () => {
    toggleFormulario();
    // Limpar os estados dos campos ao cancelar o formulário
    setNomeServico('');
    setLogin('');
    setSenha('');
    setURL('');
  };
  const contemNumeros = /\d/.test(senha);
  const contemLetras = (str:string) => /[a-zA-Z]/.test(str);
  const contemCaracteresEspeciais = (str:string) => /[!@#$%^&*(),.?":{}|<>]/.test(str);
  const isDisabled = nomeServico.length === 0
    || senha.length < 8
    || senha.length > 16
    || login.length === 0
    || !contemNumeros
    || !contemLetras(senha)
    || !contemCaracteresEspeciais(senha);

  const isSenhaValida = senha.length >= 8;
  const isSenhaValida2 = senha.length <= 16;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formInfo = {
      nomeServico,
      login,
      senha,
      url,
    };
    setListaSenhas((prev) => ([...prev, formInfo]));
    toggleFormulario();
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={ handleSubmit }>
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
          <p className="invalid-password-check">
            Possuir 8 ou mais caracteres
          </p>
        )}
        {isSenhaValida2 ? (
          <p className="valid-password-check">Possuir até 16 caracteres</p>
        ) : (
          <p className="invalid-password-check">
            Possuir até 16 caracteres
          </p>
        )}
        {contemCaracteresEspeciais(senha) ? (
          <p className="valid-password-check">Possuir algum caractere especial</p>
        ) : (
          <p className="invalid-password-check">Possuir algum caractere especial</p>
        )}
        {contemLetras(senha) && contemNumeros ? (
          <p className="valid-password-check">Possuir letras e números</p>
        ) : (
          <p className="invalid-password-check">Possuir letras e números</p>
        )}
        <label htmlFor="URL">URL</label>
        <input
          type="text"
          name="URL"
          id="URL"
          value={ url }
          onChange={ (e) => setURL(e.target.value) }
        />
        <button
          type="submit"
          name="Cadastrar"
          id="cadastrar"
          disabled={ isDisabled }
        >
          Cadastrar
        </button>
        <button type="button" onClick={ cancelarFormulario }>
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default Form;
