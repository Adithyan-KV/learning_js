document.addEventListener('DOMContentLoaded',()=>{
    //adding elements
    document.querySelector('#task-input').onsubmit=addElement;

    //marking tasks as completed
    let checkbox=document.querySelectorAll("input[name='task-completed']");
    checkbox.forEach(element => {
                element.addEventListener('click',strikeOff)
            });

    //deleting an element
    let delete_buttons= document.querySelectorAll("button[name='delete-task']");
    delete_buttons.forEach(element => element.addEventListener('click',deleteTask))
});

//function that adds a new task to the todo list
addElement=()=>{
    let input = document.querySelector("#input-entry").value;
    //to prevent empty inputs making it into the list
    if(input!=""){
        //creating the HTML element to be added with the right markup
        let li = document.createElement('li');
        let checkbox=document.createElement('input')
        checkbox.type="checkbox";
        checkbox.name="task-completed";
        checkbox.addEventListener('click',strikeOff);
        li.appendChild(checkbox);
        let label=document.createElement('label');
        label.htmlFor='task';
        label.innerHTML=input;
        li.appendChild(label);
        let button=document.createElement('button');
        button.type='submit';
        button.name='delete-task';
        button.innerHTML = '&times';
        button.addEventListener('click',deleteTask)
        li.appendChild(button);

        //adding the button to the document
        document.querySelector(".list").append(li);
        document.querySelector('#input-entry').value='';
        return false;
    }
    else{
        return false;
    }
};

//strikes off the text of the label corresponding to the checkbox
//not using arrow function as i need to use "this"
function strikeOff(){
    let label=this.parentNode.querySelector("label[for='task']");
    //toggles the strikethrough depending on state of checkbox
    if (this.checked){
        label.style.textDecoration='line-through';
    }
    else{
        label.style.textDecoration='none';
    }
};

//deletes the task
function deleteTask(){
    //remove the list item corresponding to the delte button that was pressed
    this.parentNode.remove();
};
