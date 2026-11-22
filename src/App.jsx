import { useState } from 'react';
import { escola, modalidades, professores, horarios, planos } from './data.js';

function Navbar() {
  const [aberto, setAberto] = useState(false);
  const links = [
    ['#inicio', 'Início'],
    ['#modalidades', 'Modalidades'],
    ['#professores', 'Professores'],
    ['#horarios', 'Horários'],
    ['#planos', 'Planos'],
    ['#contato', 'Contato'],
  ];
  return (
    <header className="navbar">
      <a href="#inicio" className="logo">{escola.nome}</a>
      <button className="menu-btn" aria-label="Abrir menu" onClick={() => setAberto(!aberto)}>
        {aberto ? '✕' : '☰'}
      </button>
      <nav className={aberto ? 'nav-links aberto' : 'nav-links'} onClick={() => setAberto(false)}>
        {links.map(([href, texto]) => (
          <a key={href} href={href}>{texto}</a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-texto">
        <h1>Mova seu corpo, solte sua arte</h1>
        <p>
          Há {escola.anos} anos formando bailarinos e apaixonados por dança em {escola.cidade}.
          Aulas para crianças, adultos e para quem está começando agora.
        </p>
        <a href="#contato" className="botao">Faça sua matrícula</a>
      </div>
    </section>
  );
}

function Modalidades() {
  return (
    <section id="modalidades" className="secao">
      <h2>Modalidades</h2>
      <div className="grid">
        {modalidades.map((m) => (
          <article key={m.id} className="card">
            <div className="card-topo" style={{ background: m.cor }} />
            <h3>{m.nome}</h3>
            <span className="tag">{m.nivel}</span>
            <p>{m.descricao}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Professores() {
  return (
    <section id="professores" className="secao secao-alt">
      <h2>Nossos professores</h2>
      <div className="grid">
        {professores.map((p) => (
          <article key={p.nome} className="card">
            <div className="avatar">{p.nome.charAt(0)}</div>
            <h3>{p.nome}</h3>
            <strong>{p.especialidade}</strong>
            <p>{p.formacao}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Horarios() {
  return (
    <section id="horarios" className="secao">
      <h2>Grade de horários</h2>
      <div className="tabela-wrapper">
        <table className="tabela">
          <thead>
            <tr>
              <th>Dia</th>
              <th>Horários</th>
            </tr>
          </thead>
          <tbody>
            {horarios.map((h) => (
              <tr key={h.dia}>
                <td>{h.dia}</td>
                <td>
                  {h.aulas.map((a) => (
                    <div key={a.hora + a.aula}>
                      <b>{a.hora}</b> - {a.aula}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Planos() {
  return (
    <section id="planos" className="secao secao-alt">
      <h2>Planos</h2>
      <div className="grid">
        {planos.map((p) => (
          <article key={p.nome} className={p.destaque ? 'card plano destaque' : 'card plano'}>
            <h3>{p.nome}</h3>
            <div className="preco">{p.preco}</div>
            <p>{p.detalhe}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contato() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <section id="contato" className="secao">
      <h2>Contato e matrícula</h2>
      <div className="contato">
        <div>
          <p><b>Telefone:</b> {escola.telefone}</p>
          <p><b>E-mail:</b> {escola.email}</p>
          <p><b>Endereço:</b> {escola.endereco}</p>
        </div>
        {enviado ? (
          <p className="sucesso">Recebemos seu pedido! Em breve entraremos em contato.</p>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Seu nome" required />
            <input type="email" placeholder="Seu e-mail" required />
            <input type="tel" placeholder="Seu telefone" />
            <select required defaultValue="">
              <option value="" disabled>Escolha uma modalidade</option>
              {modalidades.map((m) => (
                <option key={m.id}>{m.nome}</option>
              ))}
            </select>
            <button type="submit" className="botao">Quero me matricular</button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {escola.nome}. Todos os direitos reservados.</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Modalidades />
        <Professores />
        <Horarios />
        <Planos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
