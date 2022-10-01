// Link a los ejercicios https://docs.google.com/document/d/14BywuT7dxq7O-F4pOTMxvK2u6LBxy4S5j6Ok_-RFYz8/edit



///////////////////////// ARRAYS /////////////////////////

// let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
// for(i=0;i<12;i++){
//     document.write(meses[i] + '<br>')
// }


// let ciudad = []
// while(confirm('Desea ingresar el nombre de una ciudad?') === true){
//     ciudad.push(prompt('Ingrese el nombre de una ciudad')) 
// }
// document.write(ciudad + '<br>')
// document.write('el arreglo tiene ' + ciudad.length + ' elementos' + '<br>')
// document.write('El primer elemento es ' + ciudad[0] + '<br>')
// document.write('El tercero elemento es ' + ciudad[2] + '<br>')
// document.write('El ultimo elemento es ' + ciudad[ciudad.length - 1] + '<br>')
// ciudad.push('paris')      
// document.write('agregando paris al ultimo: ' + ciudad + '<br>')
// document.write('El segundo elemento es ' + ciudad[1] + '<br>')
// ciudad.splice(1,1,'Barcelona')
// document.write('Reemplazo al segundo elemento por Barcelona: ' + ciudad + '<br>')

// let apariciones = []
// let i = 0
// while (i < 50) {
//     let num1 = Math.round((Math.random() * 5) + 1)
//     let num2 = Math.round((Math.random() * 5) + 1)
//     let result = num1 + num2
//     apariciones.push(result)
//     i++
// }
// document.write(apariciones)

////////////////// FUNCIONES ////////////////////

// let numero = parseInt(prompt('Ingrese un numero'))
// function paroimpar(num){
//     if(num % 2 === 0){
//         return 'el numero es par'
//     } else{
//         return 'el numero es impar'
//     }
// }
// document.write(paroimpar(numero))

// let cadena = prompt('Ingrese un texto')
// cadena.toLowerCase
// cadena.toUpperCase
// function maymin(texto){
//    if(texto === texto.toLowerCase()){
//     return 'la cadena esta formada solo por minusculas'
//    } else if(texto === texto.toUpperCase()){
//     return 'la cadena esta formada solo por mayusculas'
//    } else{
//     return 'la cadena es una mezcla de mayuscuclas y minusculas'
//    }
// }
// document.write(maymin(cadena))

// let ladoA = parseInt(prompt('Ingrese el valor de un lado de un rectangulo'))
// let ladoB = parseInt(prompt('Ingrese el otro valor del lado de un rectangulo'))
// function perimetro(a,b){
//     let p = 2*(a+b)
//     return 'el perimetro del rectangulo es ' + p 
// }
// document.write(perimetro(ladoA,ladoB))

// let num = parseInt(prompt('Ingrese un numero'))
// function tabla(numero){
//     let tablamul = ''
//     for(i=1;i<=10;i++){
//         tablamul = tablamul + (numero + ' x ' + i + ' = ' + numero * i + '<br>')
//     }
//     return tablamul
// }
// document.write(tabla(num))



/////////////////////////FILTER Y ORDENAR ARRAY DE NUMEROS////////////////////////

// let numeros = [2,8,15,19,10]

// let pares = numeros.filter((num) => num % 2 === 0)

// let menoramayor = numeros.sort(function (a,b){
//     return a-b
// })

// document.write(pares + '<br>')
// document.write(menoramayor)

////////////////Filtrar todos los nombres que contengan m/////////////////

// let nombres = ['juan', 'pedro', 'maria', 'pablo', 'mario', 'Mariano','Ema']
// let nombresm = nombres.filter(nombre => nombre.toLowerCase().includes('m'))
// console.log(nombresm)


//////////////////////FILTRAR REPETIDOS//////////////////////////////////

// let numeros = [1,2,4,5,1,9,4,10]
// let numerosunicos = numeros.filter((item,index) => numeros.indexOf(item) === index)
// console.log(numerosunicos)


