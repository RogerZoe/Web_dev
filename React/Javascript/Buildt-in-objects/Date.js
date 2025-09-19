// Creating a Date object
let currentDate = new Date();

// Displaying the current date and time
console.log(currentDate); // Output: Current date and time

// Creating a Date object for a specific date and time
let specificDate = new Date("2024-04-30T12:00:00");

// Displaying the specific date and time
console.log(specificDate); // Output: 2024-04-30T12:00:00.000Z

// Getting various components of a date
console.log(specificDate.getFullYear()); // Output: 2024
console.log(specificDate.getMonth()); // Output: 3 (April, months are zero-based)
console.log(specificDate.getDate()); // Output: 30
console.log(specificDate.getDay()); // Output: 2 (Tuesday, days are zero-based, 0 for Sunday)

// Setting various components of a date
specificDate.setFullYear(2025);
console.log(specificDate.getFullYear()); // Output: 2025

// Formatting a date as a string
console.log(specificDate.toDateString()); // Output: Tue Apr 30 2025

// Getting the time in milliseconds since January 1, 1970 (Unix Epoch)
console.log(specificDate.getTime()); // Output: Number of milliseconds

// Creating a Date object using milliseconds
let milliseconds = 1619784000000; // Equivalent to "2024-04-30T12:00:00"
let dateFromMilliseconds = new Date(milliseconds);
console.log(dateFromMilliseconds); // Output: 2024-04-30T12:00:00.000Z
