// Import SCSS to bundle the styles
import './index.scss';

// Import htmx (it registers itself on window.htmx)
import 'htmx.org';

// Basic application code
window.addEventListener('DOMContentLoaded', () => {
  const header = document.createElement('h1');
  header.innerText = 'Hello, Webpack with TypeScript, SCSS & htmx!';
  document.body.appendChild(header);

  // Example: create a button that uses htmx attributes for AJAX actions
  const button = document.createElement('button');
  button.innerText = 'Click me for AJAX action';
  button.setAttribute('hx-get', '/data');
  button.setAttribute('hx-target', 'body');
  document.body.appendChild(button);
});
