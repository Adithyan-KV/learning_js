document.addEventListener('DOMContentLoaded',()=>{
    class CounterComponent extends HTMLElement{
        constructor(){
            super();

            //adding shadow DOM
            this.attachShadow({mode:'open'});

            //adding template HTML markup to create component
            const template = document.querySelector('#counter-component');
            this.shadowRoot.appendChild(template.content.cloneNode(true));

            //state of counter
            this.count = 0;
            //setting default value of counter
            this.shadowRoot.querySelector('.count').innerHTML=this.count;


        };

        setTheme(theme){
            if (theme=== 'light'){
                let element=this.shadowRoot.querySelector('.container');
                element.style.setProperty('--background-color','var(--light-background-color)');
                element.style.setProperty('--text-color','var(--light-text-color)');
                element.style.setProperty('--hover-color','var(--light-hover-color)');
                element.style.setProperty('--hover-text-color','var(--light-hover-text-color)');
                element.style.setProperty('--active-color','var(--light-active-color)');
            }
            else if(theme === 'dark'){
                let element=this.shadowRoot.querySelector('.container');
                element.style.setProperty('--background-color','var(--dark-background-color)');
                element.style.setProperty('--text-color','var(--dark-text-color)');
                element.style.setProperty('--hover-color','var(--dark-hover-color)');
                element.style.setProperty('--hover-text-color','var(--dark-hover-text-color)');
                element.style.setProperty('--active-color','var(--dark-active-color)');
            }
        };

        connectedCallback(){
            console.log("element added to DOM");

            let counter = this.shadowRoot.querySelector('.count');
            let count = this.count;

            //increment Counter
            let incr_btn = this.shadowRoot.querySelector('#increment');
            incr_btn.addEventListener('click',incrementCounter);

            //decrement Counter
            let decr_btn = this.shadowRoot.querySelector('#decrement');
            decr_btn.addEventListener('click',decrementCounter);

            let reset_btn = this.shadowRoot.querySelector('#reset');
            reset_btn.addEventListener('click',resetCounter);

            let theme=this.getAttribute('theme');
            this.setTheme(theme);



            function incrementCounter(){
                count++;
                counter.innerHTML=count;
            };

            function decrementCounter(){
                count--;
                counter.innerHTML=count;
            };

            function resetCounter(){
                count=0;
                counter.innerHTML=count
            };
        };

        disconnectedCallback(){
            console.log("element removed from DOM");
        };
    };

    window.customElements.define('counter-component',CounterComponent);

});
