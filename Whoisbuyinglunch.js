function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.

  numberOfPeople = names.length;
  peoplePosition = Math.floor(Math.random() * numberOfPeople);
  var randomPerson = names[peoplePosition]
  return randomPerson + " is going to buy lunch today!";

/******Don't change the code below*******/    
}

names = ["april", "Brandon", "Shelly"]
whosPaying(names);