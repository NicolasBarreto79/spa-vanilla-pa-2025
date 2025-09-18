import Header from './templates/Header.js';
import routes from './routes/index.js';
import './styles/styles.css';

// Analiza la URL actual y devuelve la ruta
const parseLocation = () => {
  const parts = location.hash ? location.hash.toLowerCase().split('/') : ['#', ''];
  const root = parts[1] || '';
  const id = parts[2];

  if (!root || root === '') return '/';
  if (root === 'about') return '/about';
  if (root === 'launch' && id) return '/launch/:id';
  return '404';
};

// Router: decide qué vista cargar
const router = async () => {
  document.getElementById('header').innerHTML = Header();

  const path = parseLocation();
  const page = routes[path] || routes['404'];
  const html = await page();

  document.getElementById('app').innerHTML = html;
};

// Ejecutar router al inicio y cuando cambie el hash
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
