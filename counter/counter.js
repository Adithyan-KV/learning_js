//checks if session storage has a value for count if not sets it to zero
if (!sessionStorage.getItem('count'))
    sessionStorage.setItem('count',0);

//when document is loaded
document.addEventListener('DOMContentLoaded', ()=>{
    //set the counter to the value in local storage
    let count = sessionStorage.getItem('count');

    //updates the counter and local storage variable
    update_count = () =>{
        document.querySelector(".counter").innerHTML = count;
        sessionStorage.setItem('count',count)
    }

    document.querySelector('.counter').innerHTML= count;

    //when increment button is pressed increments count and stores it to lccal storage
    document.querySelector('#increment').onclick = () =>{
        count++;
        update_count();
    }

    //when decrement button is pressed decrements count and stores it to local storage
    document.querySelector('#decrement').onclick = () =>{
        count--;
        update_count();
    }

    document.querySelector('#reset').onclick = () =>{
        count=0;
        update_count();
    }
});
