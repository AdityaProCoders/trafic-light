// h1 


 
// trafick light

function changeColour(colour, delay, post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let div = document.querySelector("div");
            let p = document.querySelector("p");
             div.style.backgroundColor = colour;
             p.innerText = post;
             resolve("colour changed")  
         },delay)
         
    });
}

async function show() {
    await changeColour("red",1000, "Stop!");
    await changeColour("yellow",5000, "reday");
          changeColour("rgb(18, 234, 18)",8000, "Go")
 
}

show();
 

