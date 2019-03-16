window.onload = function(){
    
    let card = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
    let suit = ['\u2660','\u2663','\u2665','\u2666'];
    
    
    let result = card[Math.floor(Math.random() * card.length)];
    let result1 = suit[Math.floor(Math.random()* suit.length)];
    
    console.log(result);
    console.log(result1);
    
    // let cardTop = document.querySelector(".card-top"); 
    // cardTop.innerHTML = '\u2660';
   
    
    // let cardBottom = document.querySelector(".card-bottom");
    // cardBottom.innertHTML = '\u2660';
        

    
    if (result1 === '\u2660' || result1 === '\u2663' ){
      document.querySelector(".card-top").style.color = 'black';
      document.querySelector(".card-bottom").style.color = 'black';
    }
    
    document.querySelector(".card-top").innerHTML = result1;
    document.querySelector(".card-center").innerHTML = result;
    document.querySelector(".card-bottom").innerHTML = result1;
};


