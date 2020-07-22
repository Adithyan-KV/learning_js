document.addEventListener('DOMContentLoaded',()=>{

});

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
    };

    connectedCallback(){
        console.log("element added to DOM");
    }

    disconnectedCallback(){
        console.log("element removed from DOM");
    }

    // connectedCallback(){
    //
    //     //adding the HTML content of the counter
    //     var content_markup=``
    //
    //
    //     this.innerHTML=content_markup;
    //
    //     //incrementing
    //     let incr_btn=this.querySelector("#increment");
    //     incr_btn.addEventListener('click',()=>{
    //         this.count++;
    //         let count =  this.querySelector('.count');
    //         count.innerHTML = this.count;
    //     });
    //
    //     //decrementing
    //     let decr_btn=this.querySelector('#decrement');
    //     decr_btn.addEventListener('click',()=>{
    //         this.count--;
    //         let count = this.querySelector('.count');
    //         count.innerHTML = this.count;
    //     });
    //
    //     let reset_btn=this.querySelector('#reset');
    //     reset_btn.addEventListener('click',()=>{
    //         this.count=0;
    //         this.querySelector('.count').innerHTML = this.count;
    //     });
    // };
};

window.customElements.define('counter-component',CounterComponent);
