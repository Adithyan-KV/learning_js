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
    };

    customElements.define('task-component',TaskComponent);
});
