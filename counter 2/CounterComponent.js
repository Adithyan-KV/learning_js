document.addEventListener('DOMContentLoaded',()=>{

});

class CounterComponent extends HTMLElement{
    constructor(){
        super();

        //state of counter
        this.count = 0;
    };

    connectedCallback(){

        //adding the HTML content of the counter
        var content_markup=`<div class='container'>
                                <h2>Counter</h2>
                                <div class=count>${this.count}</div>
                                <div class='button-container'>
                                    <button type='button' name='increment' id='increment'>+</button>
                                    <button type='button' name='decrement' id='decrement'>-</button>
                                    <br>
                                    <button type='button' name='reset' id='reset'>Reset</button>
                                </div>
                            </div>`


        this.innerHTML=content_markup;

        //incrementing
        let incr_btn=this.querySelector("#increment");
        incr_btn.addEventListener('click',()=>{
            this.count++;
            let count =  this.querySelector('.count');
            count.innerHTML = this.count;
        });

        //decrementing
        let decr_btn=this.querySelector('#decrement');
        decr_btn.addEventListener('click',()=>{
            this.count--;
            let count = this.querySelector('.count');
            count.innerHTML = this.count;
        });

        let reset_btn=this.querySelector('#reset');
        reset_btn.addEventListener('click',()=>{
            this.count=0;
            this.querySelector('.count').innerHTML = this.count;
        });
    };
};

window.customElements.define('counter-component',CounterComponent);
