const sketchPadContainer = document.querySelector(".sketchPad");
const selectedColor = document.querySelector("#colorPicker");
const slider= document.querySelector("#slider");
const resetButton = document.querySelector("#resetButton");
const eraserButton = document.querySelector("#eraserButton");
let gridSize = slider.value;
let cellWidth = Math.floor(750/gridSize,0)+'px';
let cellHeight = Math.floor(750/gridSize,0)+'px';
createGrid(gridSize);
console.log(selectedColor.value);

function createCells(){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.height = cellWidth;
    cell.style.width = cellHeight;
    return cell;
}

function createGrid(gridSize){
    for(i=0;i< gridSize; i++){
        for(j=0;j<gridSize;j++)
        {
            sketchPadContainer.append(createCells());

        }
        
    }
sketchPadContainer.addEventListener('mouseover',(e)=>{
    if(e.target.matches('.cell'))
        {
            e.target.style.backgroundColor = selectedColor.value;
        }
})
    
resetButton.addEventListener("click",()=>{
    window.location.reload();
})

eraserButton.addEventListener("click",()=>{
    selectedColor.value='#FFFFFF';
})

}
