async function loadComponent(id, url) {
  const el = document.getElementById(id);
  if (!el) return;
  try {
    const res = await fetch(url);
    const html = await res.text();
    el.innerHTML = html;
  } catch (e) {
    console.error('Failed to load component', url, e);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadComponent('header-placeholder', 'components/header.html');
  loadComponent('footer-placeholder', 'components/footer.html');
});
