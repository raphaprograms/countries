const KEY = 'theme';

export function setTheme() {
    const button = document.getElementById('theme-toggle') as HTMLButtonElement;

    const saved: 'light' | 'dark' | null = localStorage.getItem(KEY) as 'light' | 'dark' | null;

    let theme: 'light' | 'dark' = saved ?? 'light';

    document.documentElement.setAttribute('data-theme', theme);

    if (button) {
        button.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
        button.addEventListener('click', () => {
        theme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(KEY, theme);
        button.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
        });
    }
}