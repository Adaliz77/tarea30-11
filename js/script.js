//Crear variables
var x;
let y;
//Usando variables
x = 5;
y = 6;
let z = x + y;
//Tipos de variables primitivas
/*
Hay 3 formas de declarar una variable en javaScript
utilizando var
utilizando let
utilizando const
*/

//Mensajes de consola
/*
JavaScript puede mostrar datos de diferentes formas
Escribiendo en un elemento HTML, usando innerHTML
Escribiendo en la salida HTML usando document.write()
Escribiendo en un cuadro de alerta usando window.alert()
Escribiendo en la consola del navegador usando console.log()

*/

//Matrices en javaScript
const cars = ["Saab", "Volvo", "BMW"];

const cars = [
    "Saab",
    "Volvo",
    "BMW"
  ];

  const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

const cars = new Array("Saab", "Volvo", "BMW");

//Arreglos literales
let coffees = ['French Roast', 'Colombian', 'Kona'];

//Funciones en javaScript
function myFunction(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
  }

//Ejemplo bucle while
while (i < 10) {
    text += "The number is " + i;
    i++;
  }

  //Condición if else
  var time = 5;
  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }

  //Operador ternario
  var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Acceso Denegado" : secondCheck ? "Acceso Denegado" : "Acceso Permitido";

    console.log( access ); // muestra "Acceso Permitido"

    //Ejemplo de switch
    switch (expr) {
        case 'Naranjas':
          console.log('El kilogramo de naranjas cuesta $0.59.');
          break;
        case 'Manzanas':
          console.log('El kilogramo de manzanas cuesta $0.32.');
          break;
        case 'Platanos':
          console.log('El kilogramo de platanos cuesta $0.48.');
          break;
        case 'Cerezas':
          console.log('El kilogramo de cerezas cuesta $3.00.');
          break;
        case 'Mangos':
        case 'Papayas':
          console.log('El kilogramo de mangos y papayas cuesta $2.79.');
          break;
        default:
          console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
      }
      
      console.log("¿Hay algo más que te quisiera consultar?");

      //Clases en javaScript
      class Car {
        constructor(name, year) {
          this.name = name;
          this.year = year;
        }
      }
        let myCar1 = new Car("Ford", 2014);
        let myCar2 = new Car("Audi", 2019);

        //Herencia en javaScript
        class Car {
            constructor(brand) {
              this.carname = brand;
            }
            present() {
              return 'I have a ' + this.carname;
            }
          }
          
          class Model extends Car {
            constructor(brand, mod) {
              super(brand);
              this.model = mod;
            }
            show() {
              return this.present() + ', it is a ' + this.model;
            }
          }
          
          let myCar = new Model("Ford", "Mustang");
          document.getElementById("demo").innerHTML = myCar.show();

          //Promesas, es muy complejo y no entiendo por eso no pongo código, no quiero pegar un
          //trozo de código que no entiendo.