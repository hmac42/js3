let btons = document.querySelectorAll("button");
let firstBton = btons[0];
let txt = document.querySelector("#bloc1");
console.log(firstBton);

firstBton.addEventListener("click", () =>{
    txt.style.backgroundColor = "yellow";
});



let txtClr = document.querySelectorAll("#bloc1 p" )
let secondBton = btons[1];

secondBton.addEventListener("click", () =>{
    
    txtClr[0].style.color = "black";
    txtClr[1].style.color = "black";
});

//manque mouseover