 var point = 0;

 function result(){
    document.getElementById("true1").addEventListener("click",function(){
        point += 5
        
     })
     
     document.getElementById("true2").addEventListener("click",function(){
         point += 5
     })
     document.getElementById("true3").addEventListener("click",function(){
         point += 5
     })
     document.getElementById("true4").addEventListener("click",function(){
         point += 5
     })
     document.getElementById("true5").addEventListener("click",function(){
         point += 5
     })

   
 }
    

 function submit(){
     document.querySelector(".submit").addEventListener("click",function(){
       var score = document.querySelector("#result");
       score.textContent = point
     })
 }
 
 submit();