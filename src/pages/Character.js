import { getLaunchById } from '../utils/getData.js';

const LaunchDetail = async () => {
  // tomamos el id de la URL: #/launch/:id
  const [, , id] = location.hash.split('/'); // ["#", "launch", ":id"]

  const l = await getLaunchById(id);
  if (!l) return `<section class="container"><p>No se encontró el lanzamiento.</p></section>`;

  const date = new Date(l.date_utc).toLocaleString();
  const img  = l?.links?.patch?.large || l?.links?.patch?.small || '';
  const yt   = l?.links?.webcast || '';
  const art  = l?.links?.article || '';
  const wiki = l?.links?.wikipedia || '';

  return `
    <section class="container">
      <a class="back" href="#/">← Volver</a>
      <div class="detail">
        ${img ? `<img class="detail__img" src="${img}" alt="${l.name}" />` : ''}
        <div class="detail__body">
          <h2>${l.name}</h2>
          <p><strong>Fecha:</strong> ${date}</p>
          ${l.details ? `<p class="muted">${l.details}</p>` : '<p class="muted">Sin descripción.</p>'}
          <div class="links">
            ${yt   ? `<a target="_blank" href="${yt}">🎥 Webcast</a>` : ''}
            ${art  ? `<a target="_blank" href="${art}">📰 Artículo</a>` : ''}
            ${wiki ? `<a target="_blank" href="${wiki}">📚 Wikipedia</a>` : ''}
          </div>
        </div>
      </div>
    </section>
  `;
};

export default LaunchDetail;
