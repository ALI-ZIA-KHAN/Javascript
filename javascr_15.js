/**FOR MAKING CALCULATOR */

var n1 = parseInt(prompt('Enter the first number :'));
var opr = prompt('Enter operation :');
var n2 = parseInt(prompt('Enter the second number :'));



console.log(n1 + opr + n2);

if(opr === '+'){
    alert((n1) + (n2));
}
else if(opr === '-'){
    alert(n1 - n2);
}
else if(opr === '*'){
    alert(n1 * n2);
}
else if(opr === '/'){
    alert(n1 / n2);
}
else if(opr === '%'){
    alert((n1 / n2) * 100 + '%')
}