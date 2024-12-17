document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
  
    themeToggleBtn.addEventListener('click', () => {
      if (htmlElement.getAttribute('data-theme') === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
      } else {
        htmlElement.setAttribute('data-theme', 'dark');
      }
    });
});