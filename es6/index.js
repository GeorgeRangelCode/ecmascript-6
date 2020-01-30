/** ES5 */
let a = "";
function newFuntion(name, age, country) {
  var name = name || "Jorge";
  var age = age || 25;
  var country = country || "Colombia";
  console.log(name, age, country);
}

/** ES6 */
function newFuntion2(name = "Jorge", age = 25, country = "Colombia") {
  console.log(name, age, country);
}

newFuntion2();
newFuntion2("Pedro", 23, "Mexico");

let hello = "Hola";
let world = "Mundo";

/** ES5 */
let hi = hello + " " + world;
console.log(hi);

/** ES6 Template literals */
let hi2 = `${hello} ${world}`;
console.log(hi2);

let lorem = "lorem dg shgdf tsdf sdfsd hsdgfs gf \n" + "dghfsd dsfhusdf hjdf.";

let lorem2 = `lorem dg shgdf tsdf sdfsd hsdgfs gf
dghfsd dsfhusdf hjdf.`;

console.log(lorem);
console.log(lorem2);

let person = {
  name: "Jorge",
  age: 25,
  country: "Colombia"
};

console.log(person.name, person.age, person.country);

/** Desestructuración */

let { name, age, country } = person;
console.log(name, age, country);

let { name } = person;
console.log(name);

/** Operador de propagación */
let team1 = ["pedro", "pablo", "jorge"];
let team2 = ["valeria", "jessica", "juana"];

let education = ["david", ...team1, ...team2];
console.log(education);

{
  var globalVar = "global Var";
}

{
  let globalLet = "global Let";
  console.log(globalLet);
}

console.log(globalVar);

const a = "b";
console.log(a);
