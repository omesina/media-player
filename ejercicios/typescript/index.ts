console.log('Hello, TypeScript');

//Boolean
let muted: boolean = true;

//Numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

//String
let nombre: string = "Mesina";
let saludo = 'Me llamo: ' + nombre;

//Areglos
let personas: string[] = [];
personas = ["Oscar", "Ricardo", "Mesina", "Manzo"];

let peopleAndNumbers: Array<string | number> = []
peopleAndNumbers.push('Oscar');
peopleAndNumbers.push('Mesina');
peopleAndNumbers.push(47);

console.log(peopleAndNumbers);

//Enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
    Amarillo = "Amarillo",
}

let colorFavorito: Color = Color.Azul;
console.log("Mi color favorito: es: " + colorFavorito);

//Any
let comodin:any = 'Joker';
comodin = { type: 'Wildcard'};
console.log(comodin);

//Object
let someObject: object =  { type: 'Wildcard'};
console.log(someObject);

//Funciones
//----------------------------------------------------------
function add(a:number, b:number): number {
    return a + b;
}

const sum = add(3, 2);
console.log(sum);

function createAdder(a:number): (number) => number  {
    return function(b:number) {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);
console.log(fourPlus6);

function fullName(fisrtName:string, lastName?: string): string {        
    let lastName = (typeof(lastName) === 'undefined')? '' : lastName;

    return fisrtName +  ' ' + lastName;
}

const name = fullName('Oscar','Mesina');
console.log('Mi nombre es: ' + name);

//Interfaces
interface Rectangulo {
    ancho: number;
    alto: number;
    color: Color;
}

let rectangulo: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: "Azul",
}

function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}

const areaRect = area(rectangulo);
console.log(areaRect);

rectangulo.toString = function() {
    return 'Un rectangulo de color: ' +  this.color;
}

console.log(rectangulo.toString());