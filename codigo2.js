/*

Ejercicios Parte 2

https://docs.google.com/document/d/1ySv1jekuNFCjC7UR61j8n7UV7ZiqOyteX4Hni2K_aQM/edit

*/






// let edad = parseInt(prompt('Ingrese su edad')) 
// if(edad > 18){
//     alert('Usted esta habilitado para conducir')
// } else{
//     alert('Usted no esta habilitado para conducir')
// }


// let nota = parseInt(prompt('Ingrese calificacion del 0 al 10')) 
// console.log(nota)
// console.log(typeof(nota))
// if(nota <= 10 && nota >= 0){
//     if(nota <= 2){
//         alert('Muy deficiente')
//     } else if(nota <= 4){
//         alert('Insuficiente')
//     } else if(nota <= 6){
//         alert('Suficiente')
//     } else if(nota === 7 ){
//         alert('Bien')
//     } else if(nota <= 9){
//         alert('Notable')
//     } else if(nota === 10){
//         alert('Sobresaliente')
//     }
// } else if(isNaN(nota)){
//     alert('Ingrese un numero valido')  
// } else{
//     alert('Numero erroneo')
// }



// let cadena = ""
// let cadenanueva = ""
// while(confirm('Desea ingresar una palabra?') === true){
//     cadena =  prompt('Ingrese una palabra')  
//     cadenanueva = cadenanueva + cadena + "-"    
// }
// document.write(cadenanueva)  


// let numero = 0
// let suma = 0
// while(confirm('Desea ingresar un numero?') === true){
//     numero =  parseInt(prompt('Ingrese un numero')) 
//     if(isNaN(numero)){
//         alert('El valor ingresado no es un numero')
//     } else{
//         suma = suma + numero       
//     }   
// }
// document.write(suma)   


// let dni = 0
// let resto = 0
// let arrayletras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
// let letras = ""
// while(confirm('Desea ingresar un dni?') === true){
//     dni = parseInt(prompt('Ingrese un dni')) 
//     if(isNaN(dni)){
//         alert('El valor ingresado no es un numero')
//     }else{
//         resto = dni % 23
//         console.log(resto)
//         letras = letras + arrayletras[resto] + "-"
//     }
// }
// document.write(letras)



// let piramide = ""
// for(i = 1;i <= 30;i++){
//     piramide=i.toString().repeat(i) 
//     document.write(piramide + '<br>')
// }


// let piramide = ""
// let valor = parseInt(prompt("Ingrese un numero")) 
// if(valor <= 50){
//     console.log("HOLA" + valor)
//     for(i = valor;i >= 1;i--){
//         console.log(i)
//         piramide=i.toString().repeat(i) 
//         document.write(piramide + '<br>')
//     }
// } else{
//     alert('Ingrese un numero menor o igual a 50')
// }


// let piramide = ""
// let valor = parseInt(prompt("Ingrese un numero")) 
// if(valor <= 50){
//     for(i = 1;i <= valor;i++){
//         piramide=piramide + i.toString()
//         document.write(piramide + '<br>')
//     }
// } else{
//     alert('Ingrese un numero menor o igual a 50')
// }





// let a = ""
// let cont = 0
// for(i = 1; i <= 500; i++){
//     cont++
//     if(i % 4 === 0 && i % 9 === 0){
//         a = i.toString() + " Multiplo de 4 y de 9"
//         document.write(a + "<br>")
//         if(cont === 5){
//             document.write('-------------------'+ "<br>")
//             cont = 0
//         }
//     } else if(i % 4 === 0){
//         a = i.toString() + " Multiplo de 4"
//         document.write(a + "<br>")
//         if(cont === 5){
//             document.write('-------------------'+ "<br>")
//             cont = 0
//         }
//     } else if(i % 9 === 0){
//         a = i.toString() + " Multiplo de 9"
//         document.write(a + "<br>")
//         if(cont === 5){
//             document.write('-------------------'+ "<br>")
//             cont = 0
//         }
//     } else{
//         document.write(i + "<br>")
//         if(cont === 5){
//             document.write('-------------------'+ "<br>")
//             cont = 0
//         }
//     }   
// }



// let filas = parseInt(prompt("Ingrese el numero de filas"))
// let columnas = parseInt(prompt("Ingrese el numero de columnas"))
// let total = filas * columnas
// for (i = 1; i <= filas; i++) {
//     for (j = 1; j <= columnas; j++) {
//         document.write(total.toString() + " -- ")
//         total--
//         if(j === columnas){
//             document.write("<br>")
//         }
//     }
// }


// let edad1 = parseInt(prompt("Ingrese la primer edad"))
// let nombre1 = prompt("Ingrese el primer nombre")
// let edad2 = parseInt(prompt("Ingrese la segunda edad"))
// let nombre2 = prompt("Ingrese el segundo nombre")
// let edad3 = parseInt(prompt("Ingrese la tercera edad"))
// let nombre3 = prompt("Ingrese el tercer nombre")
// let mayor = Math.max(edad1,edad2,edad3)
// if(mayor === edad1){
//     document.write('El mayor es ' + nombre1)
// }
// if(mayor === edad2){
//     document.write('El mayor es ' + nombre2)
// }
// if(mayor === edad3){
//     document.write('El mayor es ' + nombre3)
// }


// let num = (Math.random() * 99) + 1
// let num2 = Math.round(num)
// document.write(num2)


// let texto = prompt('Ingrese un texto')
// document.write(texto.toUpperCase())


// let texto = prompt('Ingrese un texto')
// let texto_conv = ""
// for(i=0; i < texto.length; i++){
//     texto_conv = texto_conv + texto.charAt(i) + "-" 
// }
// document.write(texto_conv)


// let cadena = prompt("Ingrese una frase")
// let longcadena = cadena.length
// let contador = 0
// for(i=0; i<longcadena; i++){
//     if(cadena.charAt(i) === "a" || cadena.charAt(i) === "e" || cadena.charAt(i) === "i" 
//     || cadena.charAt(i) === "o" || cadena.charAt(i) === "u"){
//         contador++
//     }
// }
// document.write('el texto tiene ' + contador + ' vocales')


// let cadena = prompt("Ingrese una frase")
// let text = ""
// for(i=cadena.length - 1; i >= 0; i--){
//     text = text + cadena.charAt(i)
// }
// document.write(text)


// let cadena = prompt("Ingrese una frase")
// let longcadena = cadena.length
// let posicion = 0
// for(i=0; i<longcadena; i++){
//     if(cadena.charAt(i) === "a" || cadena.charAt(i) === "e" || cadena.charAt(i) === "i" 
//     || cadena.charAt(i) === "o" || cadena.charAt(i) === "u"){
//         posicion = i
//         break;
//     }
// }
// document.write('la posicion de la primera vocal es ' + posicion)















