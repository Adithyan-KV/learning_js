document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('#task-input').onsubmit=addElement;
});

addElement=()=>{
    input = document.querySelector("#input-entry").value;
    //to prevent empty inputs making it into the list
    if(input!=""){
        li = document.createElement('li');
        li.innerHTML = input;
        document.querySelector(".list").append(li);
        document.querySelector('#input-entry').value='';
        return false;
    }
    else{
        return false;
    }
};
