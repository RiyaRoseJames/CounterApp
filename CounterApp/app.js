const addBtn=document.querySelector('#add');
const subtractBtn=document.querySelector('#subtract');
const numDisplay=document.querySelector('#numDisplay')

let number=0;

addBtn.addEventListener('click',function(){
    number+=1;
    numDisplay.textContent=number;
    
});
subtractBtn.addEventListener('click',function(){
    number-=1;
    numDisplay.textContent=number;
});