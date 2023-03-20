import React, { useState } from 'react';

function App() {
  const [numero, setNumero] = useState(0);
  
  function diminuir(){
    setNumero(numero-1)
 }

  function adicionar(){
    setNumero(numero+1)
  }

  return (
    <div>
      <h1>{numero}</h1><br/>
      <button onClick={diminuir}>DIMINUIR</button>
      <button onClick={adicionar}>ADICIONAR</button>
    </div>
  );
}

export default App;