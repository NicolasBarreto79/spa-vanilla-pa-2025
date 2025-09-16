import { getLaunches } from '../utils/getData.js';

const Home = async () => {
  const data = await getLaunches();
  const launches = Array.isArray(data) ? data.slice(0, 12) : [];

  const cards = launches.map(l => {
    const date = new Date(l.date_utc).toLocaleDateString();
    const img = l?.links?.patch?.small || '';
    return `
      <a class="card" href="#/launch/${l.id}">
        ${img ? `<img src="${img}" alt="${l.name}" loading="lazy"/>` : ''}
        <h3>${l.name}</h3>
        <p><strong>Fecha:</strong> ${date}</p>
      </a>
    `;
  }).join('');

  return `
    <section class="container">
      <h2>Últimos lanzamientos</h2>
      <div class="grid">
        ${cards || '<p>No hay datos para mostrar.</p>'}
      </div>
    </section>
  `;
};

export default Home;
