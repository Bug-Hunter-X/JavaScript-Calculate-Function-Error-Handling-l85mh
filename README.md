# JavaScript Calculate Function Error Handling

This repository demonstrates a common error in JavaScript involving error handling in a switch statement within a function designed to perform basic arithmetic operations.

## The Bug

The `calculate` function handles addition, subtraction, multiplication, and division. However, it lacks proper handling for invalid operations.  If an unsupported operation is passed, it throws a generic error. A more robust solution would provide more specific error messages or handle the invalid input in a way that prevents application crashes. 

## The Solution

The solution improves error handling by providing a more informative error message when an invalid operation is given.  Additionally, it adds input validation to handle non-numeric values.