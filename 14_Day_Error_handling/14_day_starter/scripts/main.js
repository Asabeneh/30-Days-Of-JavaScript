// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// Exercise Level 1
try {
    let firstName = 'Gideon';
    let fullName = firstName + lastName;
} catch (error) {
    console.log('This is the error:', error.name)
    console.log('This is the message:', error.message)
} finally {
    console.log('I am not really important')
}

// Exercise Level 2
function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
  
  try {
    const result = divide(10, 0); // Attempt to divide by zero
    console.log("Result:", result);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }

// 

