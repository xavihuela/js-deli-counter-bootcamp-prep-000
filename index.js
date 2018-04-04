function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function currentLine(katzDeliLine)
{
  var response = ["The line is currently"]
  
  if (katzDeliLine.length === 0)
  {
    response.push(" empty.")
  }
  else
  {
  
    for(let i = 0; i < katzDeliLine.length; i++)
    {
      response.push(": ")
      response.push(i+1)
      response.push(". ")
      response.push(katzDeliLine[i])
      if (i < katzDeliLine.length-1)
      {
        response.push(", ")
      }
    }
    
    response.push(".")
  }
  var finalresponse = response.join('')
    
  return finalresponse
}