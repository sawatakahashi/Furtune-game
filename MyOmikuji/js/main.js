'use strict';

{
    const button = document.getElementById('button');

    button.addEventListener('click', () => {
       
        const n = Math.random();
        if (n < 0.05){
            button.textContent="You'll have a Great day!";
        }else if (n < 0.4){
            button.textContent="You'll have a nomal day!";
        }else{
            button.textContent="BAAAAAD DAY";
        }

        
    });
}