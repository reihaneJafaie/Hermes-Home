
$(document).ready(function(){
    let rRange = document.querySelector('#r-range');
let gRange = document.querySelector('#g-range');
let bRange = document.querySelector('#b-range');
let bodyTag = document.querySelector('body');
let btnReset = document.querySelector('#reset');
let btnRondom = document.querySelector('#random');
let mybtn = document.querySelector('#mybtnUp');
let mybtnDown = document.querySelector('#mybtnDown')



//  SCROLL UP BTN

window.onscroll = function() {scrollFunction()};

function scrollFunction () {
    if(document.body.scrollTop  > 20 || document.documentElement.scrollTop > 20 ) {
        mybtn.style.display = "block";
    }else{
        mybtn.style.display = "none";
    }
}

mybtn.addEventListener('click' , function(){
    document.documentElement.scrollTop=0;
});
//-----------------------------



// SCROLL DOWN BTN


//------------------------------


//CHENGE BACKGROUNDCOLOR 

function changeColor(){
    let redValue = rRange.value;
    let greenValue = gRange.value;
    let blueValue = bRange.value;

    console.log(redValue + "," + greenValue  + "," + blueValue) ;
    bodyTag.style.backgroundColor ="rgb("+ redValue + "," + greenValue + "," + blueValue +")";

}


rRange.addEventListener('input' , function(){
    changeColor()
  
})
gRange.addEventListener('input' , function(){
    
    changeColor()
})
bRange.addEventListener('input' , function(){
    changeColor()
    
});

btnReset.addEventListener('click' , function(){
    bodyTag.style.backgroundColor ="#f6f1eb";

    rRange.value = 246;
    gRange.value = 241;
    bRange.value = 235;
    

});

btnRondom.addEventListener('click' , function(){
    let randomRed = Math.floor(Math.random() * 255);
    let randomGreen = Math.floor(Math.random() * 255);
    let randomBlue = Math.floor(Math.random() * 255);

    console.log(randomRed + "," + randomGreen  + "," + randomBlue) ;
    bodyTag.style.backgroundColor ="rgb("+ randomRed + "," + randomGreen + "," + randomBlue +")";
    
    rRange.value = randomRed;
    gRange.value = randomGreen;
    bRange.value = randomBlue;
    
});
//--------------------------


 //model bar MenoBar
 $('#exid').click(function(){
    $('.accountForm').animate({
        width: 'toggle'
    });

});

$('#Account2').click(function(){
    $('.accountForm').animate({
        width: 'toggle'
    });


});

//--------------------------
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
});







})



