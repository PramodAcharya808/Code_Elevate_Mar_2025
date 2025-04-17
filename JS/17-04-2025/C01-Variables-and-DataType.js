/* RULES FOR CHOOSING VARIABLE NAMES
  - Letters, digits, underscors and sign allowed ✅
  - Must begin with a, $, _ or a letter 
  - Javasctript resvered keywords cant be used as a varibles
  - Pramod & pramod are 2 different variables (case sensitive)
*/

// Difference B/W var, let & const in JS

/*
  - var is globally scoped. let and const are block level scoped
  - var can be updated & re-declared within the scope
  - let can be updated but not re-declared
  - const can neither be updated nor be re-declared
  - var variables are initialized with undefined whereas let and const are not initialzed
*/

// CRUD - CREATE - READ - UPDATE - DELETE

{
  var a = 20;
  console.log("Inside Block: ", a);
}

console.log("Outside Block ", a);

// PRIMITIVE DATA TYPES - Basic Datatypes

// OBJ - non-primitive datatype

// 7 data types
/*
  - Null
  - Number
  - String
  - Symbol
  - Undefined
  - Boolean
  - BigInt
*/

// Object - Key:Value pair

let items = {
  Name: "LED bulb",
  Price: 150,
};

console.log(items);

// Small Activity: Create an Object which stores Name, Phone, Marks of a student

items = {
  Name: "LED bulb",
  Price: 150,
  Offer: "5%",
};

console.log(items.Offer);

// JSON - JavaScrtip Object Notaion
