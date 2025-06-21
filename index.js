const container = document.querySelector(".container");

//request grid size from user default is 16
let gridSize = 16;
const userInput = document.querySelector(".sizebox");
const changeBtn = document.querySelector(".submit");
changeBtn.addEventListener("click",() =>{
    const square = userInput.value;
    //Handle user input
   if(square < 1 || square > 100){
        alert("Enter a number between 1-100");
        userInput.value=16;
        return;
   }
   gridSize=userInput.value;
   makeGrid(gridSize);
});


//make grid with user given size
function makeGrid(size){
    container.innerHTML="";
    for(let i=0 ; i<size ; i++){
        const rows = document.createElement("div");
        rows.setAttribute("class", "row");  
            for(let j=0 ; j < size  ; j++){
                const cols = document.createElement("div");
                cols.setAttribute("class", "col");
                cols.style.width=size +"px";
                cols.style.width=size +"px";
                cols.style.boxSizing="border-box"

                let colorMode = "normal";
                //check normal color mode or random color mode
                const normal = document.querySelector(".normalColor");
                const random = document.querySelector(".randomColor");
                const erase = document.querySelector(".erase")
                normal.addEventListener("click",() => {
                colorMode="normal";
                    });
                random.addEventListener("click",() => {
                colorMode="random";
                    });
                erase.addEventListener("click",() => {
                colorMode="erase";
                    });
                cols.addEventListener("mouseover",() => {
                    if(colorMode == "normal"){
                        cols.style.backgroundColor="black";
                    }else if(colorMode == "random"){
                        cols.style.backgroundColor=randColor();
                    }else if(colorMode == "erase"){
                        cols.style.backgroundColor="rgb(213, 213, 213)";
                        container.style.sha
                    }
                }); 
                rows.appendChild(cols);
            }
            container.appendChild(rows);
    }
}
makeGrid(gridSize);


//reset button action
const reset = document.querySelector(".reset");
reset.addEventListener("click",()=>{
    makeGrid(gridSize);
});

//get random color 

const randColor = () => {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}


