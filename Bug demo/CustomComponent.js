document.addEventListener('DOMContentLoaded',()=>{

    class CustomComponent extends HTMLElement{
        constructor(){
            super();

            this.attachShadow({mode:'open'});

            const template=document.querySelector('#component');
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        };

        connectedCallback(){
            console.log('Element added to DOM');

            let text=this.shadowRoot.querySelector('.text');
            console.log(getComputedStyle(text).getPropertyValue('color'));
            setTimeout(()=>{console.log(getComputedStyle(text).getPropertyValue('color'))},1)
        };
    };

    customElements.define('custom-component',CustomComponent);
});
