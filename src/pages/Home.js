import { getLaunches } from '../utils/getData.js';

const Home = async () => {
  const data = await getLaunches();

  // mostramos los primeros 12 lanzamientos
  const launches = Array.isArray(data) ? data.slice(0, 12) : [];

  const cards = launches.map(l => {
    const img = l?.links?.patch?.small || '';
    const name = l?.name || 'Sin nombre';
    return `
      <a class="card" href="#/launch/${l.id}" title="Ver detalle de ${name}">
        ${img ? `<img src="${img}" alt="${name}" loading="lazy"/>` : ''}
        <h3>${name}</h3>
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
