import React from 'react';

function Form() {
  return (
    <form className="form">
      <label htmlFor="nome-do-servico">Nome do serviço</label>
      <input
        type="text"
        name="nome-do-servico"
        id="nome-do-servico"
      />

      <label htmlFor="login">Login</label>
      <input
        type="text"
        name="login"
        id="login"
      />

      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        name="senha"
        id="senha"
      />

      <label htmlFor="URL">URL</label>
      <input
        type="text"
        name="URL"
        id="URL"
      />

      <button>Cadastrar</button>
      <button>Cancelar</button>

    </form>
  );
}

export default Form;
