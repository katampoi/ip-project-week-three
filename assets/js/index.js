 var point = 0 
 function result(){
     if(document.getElementById("true1").checked)

     {
         point += 5
     }
    if(document.getElementById("true2").checked) 
    {
        point += 5
    }
    if(document.getElementById("true3").checked) 
    {
        point += 5
    }
    if(document.getElementById("true4").checked) 
    {
        point += 5
    }
    if(document.getElementById("true5").checked) 
    {
        point += 5
    }

    var display = document.getElementById("result")
    display.textContent = point

 }
    