document.addEventListener('DOMContentLoaded',()=>{

    class TodoComponent extends HTMLElement{
        constructor(){
            super();

            this.attachShadow({mode:'open'});
            let template = document.querySelector('.todo-component');
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        };

        connectedCallback(){
            console.log('Element attached to DOM');
        };

        disconnectedCallback(){
            console.log('Element removed from DOM');
        };
    }

    customElements.define('todo-component',TodoComponent);

    class TaskComponent extends HTMLElement{
        constructor(){
            super();

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
    };

    customElements.define('task-component',TaskComponent);
});
