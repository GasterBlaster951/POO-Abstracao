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
      <h2 style={{ marginBottom: '20px' }}>📧 Envio de E-mail</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: '0 auto' }}>
        <input
          type="email"
          placeholder="Destinatário"
          value={destinatario}
          onChange={e => setDestinatario(e.target.value)}
          style={{ marginBottom: '10px', padding: '8px' }}
        />
        <input
          type="text"
          placeholder="Assunto"
          value={assunto}
          onChange={e => setAssunto(e.target.value)}
          style={{ marginBottom: '10px', padding: '8px' }}
        />
        <textarea
          placeholder="Mensagem"
          value={mensagem}
          onChange={e => setMensagem(e.target.value)}
          rows={5}
          style={{ marginBottom: '10px', padding: '8px', resize: 'none' }}
        />
        <button
          onClick={handleEnviar}
          style={{
            padding: '10px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px'
          }}
        >
          Enviar
        </button>
        {enviado && <p style={{ marginTop: '10px', color: 'green' }}>✅ E-mail enviado com sucesso!</p>}
      </div>

      {/* Sugestão ao usuário */}
      <div style={{ marginTop: '30px', fontSize: '14px', color: '#555' }}>
        Dica: verifique se o destinatário está correto antes de enviar. Um simples erro de digitação pode impedir a entrega!
      </div>
    </div>
  );
}

export default App;
