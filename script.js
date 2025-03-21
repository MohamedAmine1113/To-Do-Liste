const inputbox = document.getElementById('input_box');
const ListeContainer = document.getElementById("liste-container");
function Addtask(){
    if(inputbox.value === ""){
        alert("Write something");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputbox.Value;
        ListeContainer.appendChild(li);
    }
    
}