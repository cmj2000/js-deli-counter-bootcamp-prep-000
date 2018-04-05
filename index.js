var katzDeliLine = [];



function takeANumber(katzDeliLine)
{
  var spot = []
  var i = 0
  
  
  
  
  /*
  while(i < katzDeliLine.length)
     {
     
    
      //spot.push(" "+[i+1]+ ". "+ katzDeliLine[i]   )
      //return "The line is currently:" +" " + i + ". " + spot + ", "
      
    spot.push("Welcome, " + katzDeliLine[i]+". You are numner "+[i+1] + " in line." )
        i++
     
       
     }
  
  
  
  
  

 // for(var i = 0;  i < katzDeliLine.length; i++)
   
 if(katzDeliLine.length === 0) 
  {
     return  "There is nobody waiting to be served!"
    
   }

 {
   if(spot === katzDeliLine)
   {
   spot = katzDeliLine.shift()
   
    return "Currently serving " + spot + "."
       
    
   }
  
   }
   */
    
}
  
    
    
    
  
  
  
  

////////////////////////////////////got right////////////////

function nowServing(katzDeliLine)
{
   var spot = []
 if(katzDeliLine.length === 0) 
  {
     return  "There is nobody waiting to be served!"
    
   }
 else
 {
   spot = katzDeliLine.shift()
   
    return "Currently serving " + spot + "."
       
    }
    
  }
 
  /////////////////////////////////////////////////////////////
  
  ////////////////////////////////////////got right///////////
  function currentLine(katzDeliLine)
  {
     
    
   
      var spot = []
      var i = 0;
    while(i < katzDeliLine.length)
     {
     
    
      spot.push(" "+[i+1]+ ". "+ katzDeliLine[i]   )
      //return "The line is currently:" +" " + i + ". " + spot + ", "
      
      
        i++
     
       
     }
     
     if(katzDeliLine.length === 0) 
     {
       return  "The line is currently empty."
    
     }
     
     else
     return  "The line is currently:" + spot +""
  
  }
  
  //////////////////////////////////////////////////////////////
  