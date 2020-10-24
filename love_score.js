//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

prompt("What's your name?")
prompt ("What's his/her name?")
var lovescore = Math.random()*100;
lovescore = Math.floor (lovescore) + 1;
if (lovescore > 70){
    alert("Love score is: " + lovescore + "%, you love each other just like kanyan loves kanye");
} 

if (lovescore > 30 && lovescore <= 70){
    alert("Love score is: " + lovescore + "%");
}

else{
    alert("Love score is: " + lovescore + "%, your love like water and oil.");
}
