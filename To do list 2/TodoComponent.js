document.addEventListener('DOMContentLoaded',()=>{

    class TodoComponent extends HTMLElement{
        constructor(){
            super();

            //attaching shadowDOM
            this.attachShadow({mode:'open'});

            //adding HTML markup from template
            let template = document.querySelector('.todo-component');
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        };

        connectedCallback(){
            console.log('Element attached to DOM');
            let shadow=this.shadowRoot

            //adding new items
            let form=shadow.querySelector('form');
            form.addEventListener('submit',addItem);

            function addItem(event){
                //to prevent refreshing the page on adding new element
                event.preventDefault();
                let taskLabel = shadow.querySelector('#task-input').value;
                if(taskLabel){
                    let list=shadow.querySelector('.list-container');
                    let listItem=document.createElement('task-component');
                    let slotItem=document.createElement('div');
                    slotItem.innerHTML= taskLabel;
                    slotItem.setAttribute('slot','task-name');
                    listItem.appendChild(slotItem);
                    list.appendChild(listItem);
                    //reseting to empty form
                    shadow.querySelector('#task-input').value='';
                }
            };
        };

        disconnectedCallback(){
            console.log('Element removed from DOM');
        };
    }

    customElements.define('todo-component',TodoComponent);

    class TaskComponent extends HTMLElement{
        constructor(){
            super();

            //attaching shadowDOM and adding markup
            this.attachShadow({mode:'open'});
            let template=document.querySelector('.task-component');
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        };

        connectedCallback(){
            let shadow=this.shadowRoot;

            //toggling strikethrough of text depending on state of checkbox
            let checkbox=this.shadowRoot.querySelector("input[name='task-completed']");
            checkbox.addEventListener('click',toggleStrikeThrough);

            function toggleStrikeThrough(){
                let label=shadow.querySelector('#task-text');
                if(checkbox.checked){
                    label.style.setProperty('text-decoration','line-through');
                    label.style.setProperty('color','var(--disabled-text)');
                }
                else{
                    label.style.setProperty('text-decoration','none');
                    label.style.setProperty('color','var(--lighter-hints)');
                }
            };

            //removing task if the delete button is clicked
            let close_btn=this.shadowRoot.querySelector("button[name='close']");
            close_btn.addEventListener('click',()=>this.remove());

        }

        disconnectedCallback(){
            console.log('Removed from DOM');
        }
    };

    customElements.define('task-component',TaskComponent);
});
