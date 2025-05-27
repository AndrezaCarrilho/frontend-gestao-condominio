import { useState } from 'react';
import Head from 'next/head';

export default function Login() {
  // 1. Esqueleto funcional
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de autenticação aqui
    console.log('Acessando:', usuario);
  };

  // 2. Estilização idêntica ao protótipo
  return (
    <div style={styles.page}>
      <Head>
        <title>Acesso Restrito</title>
      </Head>

      <div style={styles.container}>
        {/* Cabeçalho */}
        <h1 style={styles.title}>Usuário cadastrado</h1>

        {/* Formulário */}
        <form onSubmit={handleLogin} style={styles.form}>
          {/* Campo Usuário */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Dígite o seu usuário</label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          {/* Campo Senha */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Dígite a sua senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          {/* Termos */}
          <div style={styles.terms}>
            <p style={styles.termMain}>Política de privacidade</p>
            <p style={styles.termSub}>- Acordo de confidencialidade</p>
          </div>

          {/* Divisor */}
          <hr style={styles.divider} />

          {/* Botão */}
          <button type="submit" style={styles.button}>
            Entrar
          </button>
        </form>

        {/* Rodapé */}
        <div style={styles.footer}>
          <p>O nosso site é de USO RESTRITO a condomínio e portaria</p>
          <p style={styles.footerHighlight}>MORADORES devem utilizar o APP disponíveis na Play Store ou Apple Store</p>
        </div>
      </div>
    </div>
  );
}

// 3. Estilos exatos do protótipo
const styles = {
  page: {
    background: '#f3f4f6',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px'
  },
  container: {
    width: '100%',
    maxWidth: '320px',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '32px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  title: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    marginBottom: '24px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#374151',
    marginBottom: '4px'
  },
  input: {
    padding: '8px 12px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '14px'
  },
  terms: {
    paddingTop: '8px'
  },
  termMain: {
    fontWeight: '700',
    color: '#374151'
  },
  termSub: {
    fontSize: '14px',
    color: '#4b5563',
    marginLeft: '16px',
    marginTop: '4px'
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #e5e7eb',
    margin: '16px 0'
  },
  button: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '6px',
    fontWeight: '700',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px'
  },
  footer: {
    fontSize: '12px',
    color: '#6b7280',
    textAlign: 'center',
    marginTop: '24px',
    lineHeight: '1.5'
  },
  footerHighlight: {
    fontWeight: '500',
    marginTop: '4px'
  }
};