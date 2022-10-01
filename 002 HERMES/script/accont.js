let show = document.querySelector('#show');
let inpPass = document.querySelector('#inputPass');
let aTag =document.querySelectorAll('.chengcolorA');
 
show.addEventListener('click' , function(){
   
    if(inpPass.type =='password'){
        inpPass.type='text'
    }else{
        inpPass.type ='password'
    }
});

aTag.addEventListener('click' , function(){
    aTag.style.color ='pink'
}) 


})