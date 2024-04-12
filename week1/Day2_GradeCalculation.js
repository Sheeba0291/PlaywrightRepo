/*

Assignment Details: 
Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement 
to assess score ranges.

Assignment Requirements: 
1. Create a function that takes a student's score as a parameter.
2. Declare and initialize the variable.
3. Use `switch` statement inside the function.
4. Return the corresponding grade.
5. Call the function and print the result.

Hints to Solve: 
Use a `switch` statement with `true` for score range checks to assign grades

*/

function checkStudentScore(score)
{
switch (score) {
    case 85:
        console.log("Distinction")
        break;
    case 75:
        console.log("First Class")
        break;
    case 65:
        console.log("Second Class")
        break;

    default:
        console.log("Fail")
        break;
}
}

var score = 85;
checkStudentScore(score)
