var name = prompt ("What's your name?");
firstLetter = name.slice(0,1);
firstLetter = firstLetter.toUpperCase();
restofName = name.slice (1, name.length);
restofName = restofName.toLowerCase();

alert ("Hello " + firstletter + restofName);
