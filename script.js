const sketchPadContainer = document.querySelector(".sketchPad");
//const sketchPadWidth = sketchPadContainer.
const selectedColor = document.querySelector("#colorPicker");
const slider= document.querySelector("#slider");
let gridSize = slider.value;
let cellWidth = Math.floor(750/gridSize,0)+'px';
let cellHeight = Math.floor(750/gridSize,0)+'px';
calcGrid(gridSize)
function calcGrid(gridSize){
    for(i=0;i< gridSize; i++){
        for(j=0;j<gridSize;j++)
        {
            grid = document.createElement('div');
            grid.style.padding = '0px';
            grid.style.margin = '0px';
            grid.style.height = cellWidth;
            grid.style.width = cellHeight;
            sketchPadContainer.append(grid);

        }
        
    }
    

}
