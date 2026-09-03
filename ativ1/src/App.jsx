import Exercicio1 from './componentes/exercicio1';
import Exercicio2 from './componentes/exercicio2';
import Exercicio3 from './componentes/exercicio3';
import Exercicio4 from './componentes/exercicio4';
import Exercicio5 from './componentes/exercicio5';

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Meus Exercícios da Aula 04</h1>
      <hr />

      <section style={{ margin: '30px 0' }}>
        <h2>Exercício 1</h2>
        <Exercicio1 />
      </section>
      <hr />

      <section style={{ margin: '30px 0' }}>
        <h2>Exercício 2</h2>
        <Exercicio2 />
      </section>
      <hr />

      <section style={{ margin: '30px 0' }}>
        <h2>Exercício 3</h2>
        <Exercicio3 />
      </section>
      <hr />

      <section style={{ margin: '30px 0' }}>
        <h2>Exercício 4</h2>
        <Exercicio4 />
      </section>
      <hr />

      <section style={{ margin: '30px 0' }}>
        <h2>Exercício 5</h2>
        <Exercicio5 />
      </section>
    </div>
  );
}
