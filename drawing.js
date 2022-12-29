// Creates 9x9 grid
// Ability to adjust size of grid
function grid_size() {
    const small = (16 * 16);
    const medium = (32 * 32);
    const large = (64 * 64);

    const buttons = document.querySelectorAll(".size > button");
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.innerHTML === "small") {
                make_grid(button.innerHTML,small)
            } else if (button.innerHTML === "medium") {
                make_grid(button.innerHTML,medium)
            } else {
                make_grid(button.innerHTML,large)
            }
        })
    })
    
}

// make grid
function make_grid(size,size_val) {
    const toAdd = document.getElementById('container');
    
    toAdd.innerHTML = '';

    toAdd.classList.remove('lrg','small','med');

    console.log(size);

    if (size === "large") {
        erase();
        toAdd.classList.add('lrg');
    } else if (size === "medium") {
        erase();
        toAdd.classList.add('med');
    } else {
        erase();
        toAdd.classList.add('small');
    }
    
    for (let i = 0; i < size_val; i++) {
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
    grid_size();
    drawing();
    erase();
}

draw();