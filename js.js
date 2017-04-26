(function () {
    var    maxX =  window.innerWidth  - 80;
    var    maxY =  window.innerHeight - 80;
    var    elem =  document.getElementById('circle');
    var a,b;
    
    a = (maxX/2)-8+15;
    b = (maxY/2)-8+15;
   
    elem.className = "circle";
    elem.style.marginLeft = a+"px";
    elem.style.marginTop =  b+"px";
    
    var p = document.createElement('p');
    p.innerHTML= "Кликни по мячу";
    document.body.appendChild(p);
    
     
    elem.onclick = function(){
     
        elem.className = "circle-an";
        document.body.removeChild(p);
        
        var posX = elem.offsetLeft;
        var posY = elem.offsetTop;
        var randX = 0 + Math.random() * (maxX + 1 - 0);
        randX = Math.floor(randX);
        var randY = 0 + Math.random() * (maxY + 1 - 0);
        randY = Math.floor(randY);
        var k,b;
        k = (randY - posY)/(randX - posX);
        b = posY - (k*posX);
        
            if(randX > posX){
                    var i = posX;
                    var timerId = setInterval(function() {
                
                        posX = i;
                        posY = k*posX+b;
            
                        elem.style.marginLeft = posX+"px";
                        elem.style.marginTop =  posY+"px";
                            if (i >= randX) clearInterval(timerId);
                                i++;
                                    }, 5);
            } else {
                    var i = posX;
                    var timerId = setInterval(function() {  
                        
                        posX = i;
                        posY = k*posX+b;
           
                        elem.style.marginLeft = posX+"px";
                        elem.style.marginTop =  posY+"px";;
                                
                            if (posX <= randX) clearInterval(timerId);
                                i--;
                                    }, 5);
            }
        elem.className = "circle"; 
        document.body.appendChild(p);
    }
   
})();

