// Função para alternar o tema
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
    } else {
        body.classList.add('dark-theme');
    }
}

// Adicione um ouvinte de evento para o checkbox
const checkbox = document.querySelector('.hidden-toggle');
checkbox.addEventListener('change', toggleTheme);

