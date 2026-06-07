let inp = document.querySelector("#text");
let div = document.querySelector("div");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    if(inp.value.trim() === ""){
        return;
    }

    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";
});


ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = (event.target.parentElement);
        listItem.remove();
        console.log("delete");
    }
})