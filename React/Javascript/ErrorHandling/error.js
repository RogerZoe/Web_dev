//!CUSTOM ERROR
function validateInput(input) {
  if (!input) {
    throw new Error("Input is invalid");
  }
}

try {;
  2; // Code that may throw an error
  3;
} catch (error) {
  4; // Code to handle the error
  5;
} finally {
  6; // Code to execute regardless of errors
  7;
}


class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = 'CustomError';
    }
  }
  
  function performOperation() {
    try {
      // Code that may throw an error
      throw new CustomError('Something went wrong');
    } catch (error) {
      // Handle the error
      console.error('An error occurred:', error.message);
    } finally {
      // Code to execute regardless of errors
      console.log('Finally block executed');
    }
  }
  
  performOperation();
  
