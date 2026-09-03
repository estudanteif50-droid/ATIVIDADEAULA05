import { useState, useEffect } from 'react';

export default function Exercicio3() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function buscarUsuarios() {
      try {
        setCarregando(true);
        setErro(null);

        const resposta = await fetch('https://reqres.in/api/users?page=2', { signal });

        if (!resposta.ok) {
          throw new Error(`HTTP ${resposta.status}`);
        }

        const resultado = await resposta.json();
    
        if (resultado && Array.isArray(resultado.data)) {
          setUsuarios(resultado.data);
        } else {
          throw new Error("Formato de dados inválido.");
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          setErro(error.message);
        }
      } finally {
        if (!signal.aborted) {
          setCarregando(false);
        }
      }
    }

    buscarUsuarios();

    return () => controller.abort();
  }, []);

  if (carregando) return <p>Carregando...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <ul>
      {usuarios.map(u => (
        <li key={u.id} style={{ marginBottom: '10px' }}>
          <strong>Usuário:</strong> {u.first_name} {u.last_name} <br />
          <strong>E-mail:</strong> {u.email}
        </li>
      ))}
    </ul>
  );
}
