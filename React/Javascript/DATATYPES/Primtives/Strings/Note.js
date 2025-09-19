// * Strings can be concatenated with non-string variables but will type-convert the non-string variables into strings.

// var string = "string";
// var number = 32; var boolean = true;
// console.log(string + number + boolean); // "string32true"

// *String concatenation can be done with the + concatenation operator, or with the built-in concat() method on the String object prototype.

// var foo = "Foo";
// var bar = "Bar";
// console.log(foo + bar); // => "FooBar"
// console.log(foo + " " + bar); // => "Foo Bar"
// foo.concat(bar) // => "FooBar"
// "a".concat("b", " ", "d") // => "ab d"

// //* If your string is enclosed (i.e.) in single quotes you need to escape the inner literal quote with backslash \

// var text = 'L\' Albert means tree in Italian';
// console.log( text ); // \\ "L' Albert means tree in Italian"

// let a="Shaik Arif is Dick Boy";
// let b=a.split(" ");
// console.log(b);

// *FOR DETECTION OF A STRING WE USE TYPEOF() FOR PRIMITIVES AND FOR OBJECTS WE USE "INSTANCEOF".................

// let name="arif";
// let name2=new String("airf");
// console.log(typeof(name));
// console.log( name2 instanceof String);

// *String Representations of Numbers......................

// var b10=10;
// var b16='a';
//! n order to convert a Number from decimal (base 10) to it's hexadecimal (base 16) String representation the toString method can be used with radix 16.
// console.log(typeof(b10.toString()));//demonstrates that converting a number to a string results in a string type.

// ?If the number represented is an integer, the inverse operation for this can be done with parseInt and the radix 16 again
// console.log(typeof(parseInt(b16,16)));// demonstrates that parsing a hexadecimal string to an integer results in a number type.

//* To convert an arbitrary number (i.e. non-integer) from it's String representation into a Number, the operation must be split into two parts; the integer part and the fraction part.

let b16 = "3.243f3e0370cdc"; // Split into integer and fraction parts
let [i16, f16] = b16.split(".");
// Calculate base 10 integer part
let i10 = parseInt(i16, 16); // 3
// Calculate the base 10 fraction part
let f10 = parseInt(f16, 16) / Math.pow(16, f16.length);
// Put the base 10 parts together to find the Number 
let b10 = i10 + f10; // 3.14159
