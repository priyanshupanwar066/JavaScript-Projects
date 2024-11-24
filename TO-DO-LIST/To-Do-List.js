const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function AddTask(){
    if(inputBox.value === ''){
        alert("Please enter a Something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = '';
    Savedata();
}


listContainer.addEventListener("click" , function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("Checked")
        Savedata();
    }
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        Savedata();
    }
},false);

function Savedata(){
    localStorage.setItem("data" , listContainer.innerHTML)
}

function SHowTask (){
    listContainer.innerHTML = localStorage.getItem("data" );
}
SHowTask();