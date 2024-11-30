const searchInput = document.getElementById('search');

searchInput.focus();

document.addEventListener('click', () => searchInput.focus());

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const query = searchInput.value.trim();

        if (!query) return;

        const isValidURL = (str) => /^[\w-]+(\.[\w-]+)+.*$/.test(str);

        window.location.href = isValidURL(query)
            ? (/^https?:\/\//.test(query) ? query : `http://${query}`)
            : `http://duckduckgo.com/?q=${query}`;
    }
});
