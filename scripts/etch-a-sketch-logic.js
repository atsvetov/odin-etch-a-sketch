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
                    setGridColor(e.target);
                }});
            rows.appendChild(gridEntry);
        }
        wrapper.appendChild(rows);
    }
}

function setGridColor(gridEntry)
{
    if (document.querySelector('.toggle-checkbox').checked)
    {
        gridEntry.style.backgroundColor = '#' + Math.floor(Math.random()*0xFFFFFF).toString(16);
    }
    else
    {
        gridEntry.style.backgroundColor = currentColor
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
    
    const colorInput = document.querySelector("input[type='color']");
    colorInput.onchange = () => (currentColor = colorInput.value);

    rainbowCheckbox = document.querySelector('.toggle-checkbox');
    rainbowCheckbox.onchange = () => {
        if (rainbowCheckbox.checked)
        {
            document.querySelector('.color-pick').classList.add('remove_display');
        }
        else
        {
            document.querySelector('.color-pick').classList.remove('remove_display');
        }
    }
}

start()