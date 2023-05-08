const sketchPadContainer = document.querySelector(".sketchPad");
const selectedColor = document.querySelector("#colorPicker");
const slider= document.querySelector("#slider");
const resetButton = document.querySelector("#resetButton");
const eraserButton = document.querySelector("#eraserButton");
const gridSizeDisplay =  document.querySelector("#gridSizeDisplay");
let gridSize = slider.value * slider.value;
let cellWidth;
let cellHeight;
newCellSize(gridSize);
createGrid(gridSize);
console.log(selectedColor.value);
SizeDisplay(gridSize);

//create cells to be added to container
function createCells(){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.height = cellWidth;
    cell.style.width = cellHeight;
    return cell;
}
//display size of grid
function SizeDisplay(gridSize){
    gridSizeDisplay.textContent=` ${gridSize} x ${gridSize}`;

}
//remove all child nodes in the grid container
function removeAllChildDivs(parent){
    while(parent.firstChild)
    {
        parent.removeChild(parent.firstChild);
    }

}
//calculate cell size based on range selected
function newCellSize(gridSize){
     cellWidth = Math.floor(750/gridSize,0)+'px';
     cellHeight = Math.floor(750/gridSize,0)+'px';
}
//create grid by appending cells
function createGrid(gridSize){
    for(i=0;i< gridSize; i++){
        for(j=0;j<gridSize;j++)
        {
            sketchPadContainer.append(createCells());

        }
        
    }

//change color of cells on mouse over
sketchPadContainer.addEventListener('mouseover',(e)=>{
    if(e.target.matches('.cell'))
        {
            e.target.style.backgroundColor = selectedColor.value;
        }
})
// reload page on page reset
resetButton.addEventListener("click",()=>{
    window.location.reload();
})
 // eraser button
eraserButton.addEventListener("click",()=>{
    selectedColor.value='#FFFFFF';
})

//change number of cells in grid when range input changes
slider.addEventListener("input",(e)=>{
    gridSize = slider.value * slider.value;
    SizeDisplay(gridSize);//display new grid size
    removeAllChildDivs(sketchPadContainer); // remove existing cells
    newCellSize(gridSize);
    createGrid(gridSize);

})

}
