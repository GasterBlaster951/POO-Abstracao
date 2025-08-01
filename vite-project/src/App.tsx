import './App.css';
import { EmailService } from './services/EmailService';
import { useState } from 'react';

function App() {
  const [destinatario, setDestinatario] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleEnviar = () => {
    const email = new EmailService();
    email.enviar(destinatario, assunto, mensagem);
    setEnviado(true);
  };

  return (
    <div className="App">
      <h2>Envio de E-mail</h2>
      <input
        type="email"
        placeholder="Destinatário"
        value={destinatario}
        onChange={e => setDestinatario(e.target.value)}
      />
      <input
        type="text"
        placeholder="Assunto"
        value={assunto}
        onChange={e => setAssunto(e.target.value)}
      />
      <textarea
        placeholder="Mensagem"
        value={mensagem}
        onChange={e => setMensagem(e.target.value)}
      />
      <button onClick={handleEnviar}>Enviar</button>
      {enviado && <p>E-mail enviado com sucesso!</p>}
    </div>
  );
}

export default App;
