document.addEventListener('DOMContentLoaded',()=>{
    //adding Component
    document.querySelector('button').addEventListener('click',addComponent);
});

addComponent = () =>{
    let component=document.createElement('counter-component');
    let container=document.querySelector('.counter');
    container.appendChild(component);
};

class CounterComponent extends HTMLElement{
    constructor(){
        super();
        this.count = 0;
    };

    connectedCallback(){
        //adding the HTML content of the counter
        let content_markup=`<div class=count>${this.count}</div>
                            <button class='button' name='increment' id='increment'>+</button>
                            <button class='button' name='decrement' id='decrement'>-</button>`;
        this.innerHTML=content_markup;

        //incrementing
        let incr_button=this.querySelector("#increment");
        incr_button.addEventListener('click',()=>{
            this.count++;
            let count =  this.querySelector('.count');
            count.innerHTML = this.count;
        });

        //decrementing
        let decr_button=this.querySelector('#decrement');
        decr_button.addEventListener('click',()=>{
            this.count--;
            let count = this.querySelector('.count');
            count.innerHTML = this.count;
        });



    };
};

window.customElements.define('counter-component',CounterComponent);
