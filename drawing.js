
function make_grid() {
    const toAdd = document.getElementById('container');
    
    toAdd.innerHTML = '';
    
    for (let i = 0; i < (9*9); i++) {
        const div = document.createElement('div');
        // div.className = 'draw';
        toAdd.appendChild(div);
    }
}

make_grid();

