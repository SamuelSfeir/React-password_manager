import React, { useState } from 'react';

function Form() {
  const [exibirFormulario, setExibirFormulario] = useState(false);

  const toggleFormulario = () => {
    setExibirFormulario(!exibirFormulario);
  };

  const cancelarFormulario = () => {
    setExibirFormulario(false);
  };

  return (
    <div>
      {!exibirFormulario && (
        <button onClick={ toggleFormulario }>Cadastrar nova senha</button>
      )}

      {exibirFormulario && (
        <form className="form">
          {/* Conteúdo do seu formulário aqui */}
          <label htmlFor="nome-do-servico">Nome do serviço</label>
          <input type="text" name="nome-do-servico" id="nome-do-servico" />

          <label htmlFor="login">Login</label>
          <input type="text" name="login" id="login" />

          <label htmlFor="senha">Senha</label>
          <input type="password" name="senha" id="senha" />

          <label htmlFor="URL">URL</label>
          <input type="text" name="URL" id="URL" />

          <button name="Cadastrar">Cadastrar</button>
          <button onClick={ cancelarFormulario }>Cancelar</button>
        </form>
      )}
    </div>
  );
}

export default Form;
