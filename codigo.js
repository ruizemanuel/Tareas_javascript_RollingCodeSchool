/*

Ejercicios Parte 1

https://docs.google.com/document/d/1uK1b6C5CoplLNj2N7rkqzMs4-NrY9oeIUAfhpeDqfK8/edit

*/




//alert("un mensaje")

//document.write("Hello World")

//document.write(3+5)

// let user = prompt("Ingrese el nombre del usuario")
// document.write("Hola " + user)

// let num1 = parseInt(prompt("Ingrese el primer numero")) 
// let num2 = parseInt(prompt("Ingrese el segundo numero")) 
// document.write("La suma de ambos numeros es ", num1 + num2)

// let num1 = parseInt(prompt("Ingrese el primer numero")) 
// let num2 = parseInt(prompt("Ingrese el segundo numero")) 
// if(num1 > num2){
//     document.write("El mayor de los dos numeros es ", num1)
// }else if(num2 > num1){aja
//     document.write("El mayor de los dos numeros es ", num2)
// } else{
//     document.write("Ambos numeros son iguales")
// }

// let num1 = parseInt(prompt("Ingrese el primer numero")) 
// let num2 = parseInt(prompt("Ingrese el segundo numero")) 
// let num3 = parseInt(prompt("Ingrese el tercer numero")) 
// if(num1 > num2 && num1>num3){
//     document.write("El mayor de los tres numeros es ", num1)
// }else if(num2 > num1 && num2 > num3){
//     document.write("El mayor de los tres numeros es ", num2)
// } else if(num3 > num1 && num3 > num2){
//     document.write("El mayor de los tres numeros es ", num3)
// } else{
//     document.write("Los tres numeros son iguales")
// }

// let num = parseInt(prompt("Ingrese el numero")) 
// if(num%2 === 0){
//     document.write("El numero es divisible por 2")
// } else{
//     document.write("El numero no es divisible por 2")
// }


// let cadena = prompt("Ingrese una frase")
// let longcadena = cadena.length
// for(i=0; i<longcadena; i++){
//     if(cadena.charAt(i) === "a" || cadena.charAt(i) === "e" || cadena.charAt(i) === "i" 
//     || cadena.charAt(i) === "o" || cadena.charAt(i) === "u"){
//         document.write(cadena.charAt(i))
//     }
// }


// let num = prompt("Ingrese el numero");
// if (num % 2 === 0 || num % 3 === 0 || 
//     num % 5 === 0 || num % 7 === 0) {
// document.write("Es divisible por 2, 3, 5 o 7");
// } else {
// document.write("No es divisible ni por 2, 3, 5 o 7");
// }

let num = prompt("Ingrese el numero");
if (num % 2 === 0  || num % 3 === 0 || 
    num % 5 === 0 || num % 7 === 0) {
if(num % 2 === 0){
    document.write("Es divisible por 2 - ")
}
if(num % 3 === 0){
    document.write("Es divisible por 3 - ")
}
if(num % 5 === 0){
    document.write("Es divisible por 5 - ")
}
if(num % 7 === 0){
    document.write("Es divisible por 7")
}
} else{
    document.write("No es divisible ni por 2, 3, 5 o 7");
}


