function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function currentLine(katzDeliLine)
{
  var response = ["The line is currently "]
  
  if katzDeliLine == 0
  {
    response.push("empty.")
    return response
  }
  else
  {
  
    for(let i = 0; i < katzDeliLine.length; i++)
    {
      response.push(i+1)
      response.push(". ")
      response.push(katzDeliLine)
      response.push(", ")
    }
    
    response.push(".")
    
    return response
  }
}