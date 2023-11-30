import React, { useState } from 'react';

function Form() {
  const [exibirFormulario, setExibirFormulario] = useState(false);

  const mostrarFormulario = () => {
    setExibirFormulario(true);
  };

  return (
    <div>
      <button onClick={ mostrarFormulario }>Cadastrar nova senha</button>
      {exibirFormulario && (
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

          <button name="Cadastrar">
            Cadastrar
          </button>
          <button>Cancelar</button>

        </form>
      )}
    </div>
  );
}

export default Form;
