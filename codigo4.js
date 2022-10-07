//////////////////// EJERCICIOS POO //////////////////////////////////

/////////////////////LINK https://docs.google.com/document/d/1wbQa5l7nyT9yvRn8H-APBe69P0sjr7BU_tn3TipmMOA/edit ////////////////////




// let auto = {
//     color: 'rojo',
//     marca: 'Peugeot',
//     modelo: '208',
//     encendido(status) {
//         console.log(status)
//         return status

//     },
// }
// auto.encendido(true)
// let keys = Object.keys(auto)
// for(const key of keys){
//     const value = auto[key]
//     document.write(`${key}: ${value} <br>`)
// }





// let cuenta = {
//     titular: 'Alex',
//     saldo: 0,
//     ingresar(monto){
//         this.saldo = this.saldo + monto
//         console.log(`Usted ha ingresado ${monto} y su nuevo saldo es ${this.saldo}`)
//     },
//     extraer(monto){
//         this.saldo = this.saldo - monto
//         console.log(`Usted ha retirado ${monto} y su nuevo saldo es ${this.saldo}`)
//     },
//     informar(){
//         console.log(`Su saldo es ${this.saldo}`)
//     }
// }
// cuenta.informar()
// cuenta.ingresar(300)
// cuenta.extraer(200)
// cuenta.informar()







// class Rectangulo{
//     constructor(alto, ancho){
//       this.alto = alto
//       this.ancho = ancho
//     }
//     get perimetro() {
//         return this.cperim()
//     }
//     get area(){
//         return this.carea()
//     }
//     cperim(){
//         return this.alto*2 + this.ancho*2
//     }
//     carea(){
//         return this.alto * this.ancho
//     }
//   }
//   let rect1 = new Rectangulo(10, 30)
//   let rect2 = new Rectangulo(10, 40)
//   console.log(`el perimetro es ${rect1.perimetro}, el valor de los lados son ${rect1.alto} y ${rect1.ancho}`)
//   console.log(`el area es ${rect2.area}, el valor de los lados son ${rect2.alto} y ${rect2.ancho}`)

// class Producto{
//     constructor(codigo, nombre, precio){
//         this.codigo = codigo,
//         this.nombre=nombre,
//         this.precio = precio
//     }
//     get Datos(){
//         return this.imprimeDatos()
//     }
//     imprimeDatos(){
//         console.log(`codigo: ${this.codigo}, nombre: ${this.nombre}, precio: ${this.precio}`)
//     }
// }
// let juguete = new Producto('J01', 'IronMan', 150)
// let auto = new Producto('A02', 'Peugeot 208', 1500)
// let mesa = new Producto('M03', 'Mesa clasica', 300)
// let arrObjetos = [juguete, auto, mesa]
// for(objeto of arrObjetos){
//    objeto.Datos
// }






// class Persona {
//     constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
//         this.nombre = nombre,
//             this.edad = edad,
//             this.dni = dni,
//             this.sexo = sexo,
//             this.peso = peso,
//             this.altura = altura
//             this.anioNacimiento = anioNacimiento
//     }

//     get generacion() {
//         return this.mostrarGeneracion()
//     }

//     get numEdad() {
//         return this.esMayorDeEdad()
//     }

//     get datos(){
//         return this.mostrarDatos()
//     }

//     get DNI(){
//         return this.generaDNI()
//     }

//     mostrarGeneracion() {
//         if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
//             console.log(`La persona pertenece a la Generacion Z y su rasgo caracteristico es irreverencia`)
//         } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
//             console.log(`La persona pertenece a la Generacion Y y su rasgo caracteristico es frustracion`)
//         } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
//             console.log(`La persona pertenece a la Generacion X y su rasgo caracteristico es obsesion por el exito`)
//         } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
//             console.log(`La persona pertenece a la Generacion Baby Boom y su rasgo caracteristico es ambicion`)
//         } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
//             console.log(`La persona pertenece a la Generacion Silent Generation y su rasgo caracteristico es austeridad`)
//         }
//     }

//     esMayorDeEdad(){
//         if(this.edad >= 18){
//             console.log("La persona es mayor de edad")
//         }
//     }

//     mostrarDatos(){
//         console.log(this)
//     }

//     generaDNI(){
//         const numDocumento = Math.round((Math.random() * 99999998) + 10000000)
//         console.log(`el dni generado es ${numDocumento}`)
//     }
// }

// let usuario = new Persona('Juan', 28, 27489652, 'H', 70, 180, 1985)
// usuario.generacion
// usuario.numEdad
// usuario.datos
// usuario.DNI









// class Libro{
//     get ISBN(){
//         return this.isbn
//     }
//     set ISBN(value){
//         return this.isbn = value
//     }

//     get Titulo(){
//         return this.titulo
//     }
//     set Titulo(value){
//         return this.titulo = value
//     }

//     get Autor(){
//         return this.autor
//     }
//     set Autor(value){
//         return this.autor = value
//     }

//     get NumPaginas(){
//         return this.paginas
//     }
//     set NumPaginas(value){
//         return this.paginas = value
//     }

//     get showBook(){
//         return this.mostrarLibro()
//     }
//     mostrarLibro(){
//         console.log(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.paginas} páginas`)
//     }
// }

// const libro1 = new Libro()
// libro1.ISBN = 'A001'
// libro1.Autor = 'Juan Diaz'
// libro1.Titulo = 'La casa del lago'
// libro1.NumPaginas = 20
// const libro2 = new Libro()
// libro2.ISBN = 'B001'
// libro2.Autor = 'Pedro Paz'
// libro2.Titulo = 'Matrix'
// libro2.NumPaginas = 50
// libro1.showBook
// libro2.showBook
// if(libro1.NumPaginas > libro2.NumPaginas){
//     console.log("El libro 1 tiene mas paginas que el libro 2")
// } else{
//     console.log("El libro 2 tiene mas paginas que el libro 1")
// }













// console.log('Agenda de contactos')
// console.log('Las opciones son: 1. Añadir contacto , 2. Existe contacto?, 3. Mostrar Contactos, 4. Buscar Contacto, 5. Eliminar contacto, 6. Agenda llena?, 7. huecos libres')

// class Contacto {
//     get Nombre() {
//         return this.nombre
//     }

//     set Nombre(valor) {
//         return this.nombre = valor
//     }

//     get Telefono() {
//         return this.telefono
//     }

//     set Telefono(valor) {
//         return this.telefono = valor
//     }
// }

// let agenda = []

// function anadirContacto() {
//     if (agenda.length <= 9) {
//         let contact = new Contacto()
//         contact.nombre = prompt('Ingrese el nombre del contacto')
//         contact.telefono = prompt('Ingrese el telefono del contacto')
//         agenda.push(contact)
//         console.log('Contacto añadido con exito')
//         opcion = prompt('Ingresa una opcion')
//         mostrarMenu()
//     } else {
//         console.log('La agenda esta completa')
//         opcion = prompt('Ingresa una opcion')
//         mostrarMenu()
//     }

// }

// function existeContacto(name) {
//     let contact = agenda.find((contacto) => contacto.nombre === name)
//     if (contact === undefined) {
//         console.log('El contacto no existe')
//         opcion = prompt('Ingresa una opcion')
//         mostrarMenu()
//     } else {
//         console.log('El contacto si existe')
//         opcion = prompt('Ingresa una opcion')
//         mostrarMenu()
//     }

// }

// function listarContactos() {
//     for(item of agenda){
//         console.log(item)
//     }
//     opcion = prompt('Ingresa una opcion')
//     mostrarMenu()
// }

// function buscarContacto(bname) {
//     let contact = agenda.find((contacto) => contacto.nombre === bname)
//     if (contact === undefined) {
//         console.log('El contacto no existe')
//         opcion = prompt('Ingresa una opcion')
//         mostrarMenu()
//     } else {
//         console.log(`El contacto es ${contact.nombre} y su telefono es ${contact.telefono}`)
//         opcion = prompt('Ingresa una opcion')
//         mostrarMenu()
//     }
// }

// function eliminarContacto(cname) {
//     let contact = agenda.find((contacto) => contacto.nombre === cname)
//     if (contact === undefined) {
//         console.log('El contacto no existe')
//         opcion = prompt('Ingresa una opcion')
//         mostrarMenu()
//     } else {
//         const index = agenda.indexOf(contact)
//         agenda.splice(index, 1)
//         console.log(`El contacto se ha eliminado con exito`)
//         opcion = prompt('Ingresa una opcion')
//         mostrarMenu()
//     }
// }
// function agendaLlena() {
//     if (agenda.length < 10) {
//         console.log('La agenda no esta completa')
//         opcion = prompt('Ingresa una opcion')
//         mostrarMenu()
//     } else {
//         console.log('La agenda esta completa')
//         opcion = prompt('Ingresa una opcion')
//         mostrarMenu()
//     }
// }

// function huecosLibres() {
//     if (agenda.length < 10) {
//         let contactosLibres = 10 - agenda.length
//         console.log(`Es posible ingresar ${contactosLibres} contactos mas`)
//         opcion = prompt('Ingresa una opcion')
//         mostrarMenu()
//     } else {
//         console.log('La agenda esta completa')
//         opcion = prompt('Ingresa una opcion')
//         mostrarMenu()
//     }
// }

// opcion = prompt('Ingresa una opcion')
// mostrarMenu()

// function mostrarMenu() {
//     switch (opcion) {
//         case '1':
//             anadirContacto()
//             break

//         case '2':
//             let name = prompt('Ingrese el nombre del contacto a verificar si existe')
//             existeContacto(name)
//             break

//         case '3':
//             listarContactos()
//             break
//         case '4':
//             let bname = prompt('Ingrese el nombre del contacto a buscar')
//             buscarContacto(bname)
//             break
//         case '5':
//             let cname = prompt('Ingrese el nombre del contacto a eliminar')
//             eliminarContacto(cname)
//             break
//         case '6':
//             agendaLlena()
//             break
//         case '7':
//             huecosLibres()
//             break
//     }
// }
