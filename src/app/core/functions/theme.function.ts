let themes = 'dark';
export function CHANGETHEME(theme: string | null) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    // this.document.body.classList.add('dark-theme');
    // this.document.body.classList.remove('light-theme');
    themes = 'dark';
  } else {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
    // this.document.body.classList.remove('dark-theme');
    // this.document.body.classList.add('light-theme');
    themes = 'light';
  }
  localStorage.setItem('theme', themes);
  return {
    icon: themes === 'dark' ? 'bi bi-sun' : 'bi bi-moon-stars',
    themes: themes,
  };
}