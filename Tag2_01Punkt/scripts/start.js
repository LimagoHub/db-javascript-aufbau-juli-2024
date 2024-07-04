
(function () {
   
    var p = new Punkt({x:0,y:0});
    for(let i = 0; i < 12 ; i++)
    {
        p.rechts();
        console.log(p.toString());
    }
        
   
    
})();

