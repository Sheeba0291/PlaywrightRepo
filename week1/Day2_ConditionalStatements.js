/*

Assignment Details: 
Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and 
`runTests` with `switch` for test type messages.

Assignment Requirements: 
Create two functions : launchBrowser, runTests where,
 a) launchBrowser need to take input as browserName (string) and do not return any
 - use if-else (chrome or otherwise)
 - Print the value
 b) runTests need to take input as testType (string) and do not return any 
 - use switch case (smoke, sanity, regression, default (smoke))
 - Print the values
Call that function from the javascript

Hints to Solve: 
For `launchBrowser`, use `if-else` to check if `browserName` is "chrome" and print accordingly. For 
`runTests`, use a `switch` statement to handle different `testType` values, including a default case

*/

function launchBrowser()
{
if (browserName ==="Chrome")
{
    console.log(browserName+" is Supported Browser")
}
else
{
    console.log(browserName+" is Un-Supported Browser")
}
}

let browserName = "Chromesafari"
launchBrowser()


function runTests()
{
switch (testType) {
    case "smoke":
        console.log("Smoke Testing")
        break;
    case "sanity":
        console.log("Sanity Testing")
        break;
    case "regression":
        console.log("Regression Testing")
        break;
    default:
        console.log("Smoke Testing")
        
}
}

let testType = "UAT"
runTests()
