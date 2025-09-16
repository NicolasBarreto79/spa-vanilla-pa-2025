import Home from '../pages/Home.js';
import LaunchDetail from '../pages/Character.js';
import Error404 from '../pages/Error404.js';

const routes = {
  '/': Home,
  '/about': () => `
    <section class="container">
      <h2>Acerca de</h2>
      <p>SPA con VanillaJS que consume la API pública de SpaceX.</p>
    </section>
  `,
  '/launch/:id': LaunchDetail,
  '404': Error404,
};

export default routes;
