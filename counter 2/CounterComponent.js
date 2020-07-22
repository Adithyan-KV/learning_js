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


        function incrementCounter(){
            count++;
            counter.innerHTML=count;
        }

        function decrementCounter(){
            count--;
            counter.innerHTML=count;
        }

        function resetCounter(){
            count=0;
            counter.innerHTML=count
        }
    }

    disconnectedCallback(){
        console.log("element removed from DOM");
    }
};

window.customElements.define('counter-component',CounterComponent);
