let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('#inp');

btn.addEventListener("click", function(){
    let item = document.createElement('li');
    item.innerText = inp.value;

    let delBtn = document.createElement('button');
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    ul.appendChild(item);
    item.appendChild(delBtn);
    inp.value = "";
})

ul.addEventListener("click", function(event){
    if(event.target.nodeName === "BUTTON"){
        let listItem = event.target.parentElement
        listItem.remove();
        console.log("Element deleted");
    }
})

