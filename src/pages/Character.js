import { getLaunchById } from '../utils/getData.js';

const LaunchDetail = async () => {
  const [, , id] = location.hash.split('/'); // ["#", "launch", ":id"]
  const l = await getLaunchById(id);

  if (!l) {
    return `<section class="container"><p>No se encontró el lanzamiento.</p></section>`;
  }

  const date = new Date(l.date_utc).toLocaleString('es-AR', { hour12: false });
  const img  = l?.links?.patch?.large || l?.links?.patch?.small || '';

  const failures = l.failures?.length
    ? l.failures.map(f => `<li>⛔ ${f.reason} ${f.time != null ? `(t+${f.time}s)` : ''}</li>`).join('')
    : '<li>✅ Sin fallas reportadas</li>';

  return `
    <section class="container">
      <a class="back" href="#/">← Volver</a>
      <div class="detail">
        ${img ? `<img class="detail__img" src="${img}" alt="${l.name}" />` : ''}
        <div class="detail__body">
          <h2>${l.name}</h2>
          <p><strong>Número de vuelo:</strong> ${l.flight_number ?? '—'}</p>
          <p><strong>Fecha y hora de despegue:</strong> ${date}</p>
          <p><strong>Detalle:</strong> ${l.details || 'Sin información disponible'}</p>
          <p><strong>Fallas:</strong></p>
          <ul>${failures}</ul>
        </div>
      </div>
    </section>
  `;
};

export default LaunchDetail;
