import { useState, useEffect } from 'react';

export default function Exercicio4() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregar() {
      const response = await fetch('https://typicode.com');
      
      const data = []; 
      
      setUsuarios(data);
      setLoading(false);
    }
    carregar();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (usuarios.length === 0) return <p>Nenhum usuário encontrado.</p>;

  return (
    <ul>
      {usuarios.slice(0, 10).map(u => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
