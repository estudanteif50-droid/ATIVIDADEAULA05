import { useState, useEffect } from 'react';

export default function Exercicio2() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregar() {
      try {
        setLoading(true);
        setErro(null);
        
      
        const response = await fetch(' https://jsonplaceholder.typicode.com/usuariosenterrado ');
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        setUsuarios(data);
      } catch (err) {
        setErro(err.message);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <ul>
      {usuarios.slice(0, 10).map(u => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
