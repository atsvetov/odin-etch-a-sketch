const GRID_SIZE = 16;

let currentColor = 'black';

function buildGrid(size) 
{
    const wrapper = document.querySelector(".wrapper");
    
    while (wrapper.firstChild)
    {
        wrapper.removeChild(wrapper.lastChild);
    }
    
    for (let i = 0; i < size; i++)
    {
        var rows = document.createElement("div");
        rows.classList.add("row-entry")
        for (let j = 0; j < size; j++)
        {
            gridEntry = document.createElement("div");
            gridEntry.classList.add("grid-entry");
            gridEntry.addEventListener("mouseover", (e) => { 
                if (e.buttons == 1) {
                    e.target.style.backgroundColor = currentColor;
                }});
            rows.appendChild(gridEntry);
        }
        wrapper.appendChild(rows);
    }
}

function clearGrid()
{
    const gridEntries = document.querySelectorAll(".grid-entry");
    gridEntries.forEach((entry) => { entry.style.backgroundColor = 'white' });
}

function start()
{
    const slider = document.querySelector(".slider");
    slider.value = GRID_SIZE;

    const gridSizeVal = document.querySelector(".grid-size-value");
    gridSizeVal.textContent = `${slider.value}x${slider.value}`;

    slider.oninput = () => { gridSizeVal.textContent = `${slider.value}x${slider.value}`; }
    slider.onchange = () => { buildGrid(slider.value); }
    buildGrid(slider.value);

    document.querySelector(".clear").addEventListener("click", () => clearGrid());
    
    colorInput = document.querySelector("input[type='color']");
    colorInput.onchange = () => (currentColor = colorInput.value)
}

start()