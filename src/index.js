import Header from './templates/Header.js';
import routes from './routes/index.js';
import './styles/styles.css';

// Helpers de rutas
const parseLocation = () => {
  // '#/launch/XYZ' -> ['#', 'launch', 'XYZ']
  const parts = location.hash ? location.hash.toLowerCase().split('/') : ['#', ''];
  const root  = parts[1] || ''; // '' | 'about' | 'launch'
  const id    = parts[2];

  if (!root || root === '') return '/';
  if (root === 'about') return '/about';
  if (root === 'launch' && id) return '/launch/:id';
  return '404';
};

const router = async () => {
  // header
  document.getElementById('header').innerHTML = Header();

  // route
  const path = parseLocation();
  const page = routes[path] || routes['404'];
  const html = await page();

  // render
  document.getElementById('app').innerHTML = html;
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
