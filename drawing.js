// Creates 9x9 grid
function make_grid() {
    const toAdd = document.getElementById('container');
    
    toAdd.innerHTML = '';
    
    for (let i = 0; i < (9*9); i++) {
        const div = document.createElement('div');
        // div.className = 'draw';
        toAdd.appendChild(div);
    }
}

// change color of each grid when hovered
function drawing() {
    const divs = document.querySelectorAll("#container > div");

    divs.forEach((item) => {
        const gridItem = item;
        gridItem.count = 0;
        gridItem.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
            e.target.style.opacity = 1;

        })
    }
    )
}

// erase colors from grid
function erase() {
    const toErase = document.getElementById('erase');

    toErase.addEventListener('click', (e) => {
        const divs = document.querySelectorAll("#container > div");
        divs.forEach((item) => {
            const gridItem = item;
            gridItem.style.backgroundColor = 'grey';
        })
    });


}

function draw() {
    make_grid();
    drawing();
    erase();
}

draw();