/* FAT ARROW FUNCTION*/



/*Simple Function*/

function myname(a,b){
    var z= a+b;
    return z;
}

var res=myname(5,3)
console.log(res);

/*But in terms of Fat Arrow Function introduced in ES6*/
/*u can write like that*/

/*
1)
*/

const myame=(a,b) =>{
    return a+b;
}
var resu=myame(5,3)
console.log(resu)

/*
2)
*/
const mname= (a,b) => a+b;
var resul=mname(5,3)
console.log(resul)
/*
Both are right
*/



/*function names are diff bcz with same name fuctions couldn't run*//*otherwise
purpose is to show what is arrow function*/