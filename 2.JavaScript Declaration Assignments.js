// 1. Declare 4 variables in the same line
    var x = 4, y = 2, z = 3, w = 5;
    document.write("<b>1.</b> " + x + ", " + y + ", " + z + ", " + w + "<br><br>");

    // 2. Wrong variable naming conventions
    // var 1num = 5;   // ❌ invalid
    // var my-name = 10; // ❌ invalid
    // var let = 20;   // ❌ invalid
    var num1 = 5, myName = "Tom", $price = 100, _id = 123; // ✅ valid
    document.write("<b>2.</b> Valid examples: " + num1 + ", " + myName + ", " + $price + ", " + _id + "<br><br>");

    // 3. Same variable multiple times
    var a = 10;
    var a = 20; // overwrites old value
    document.write("<b>3.</b> a = " + a + " (overwritten)<br><br>");

    // 4. Assign value to undeclared variable
    undeclaredAssign = 50; // implicitly global
    document.write("<b>4.</b> undeclaredAssign = " + undeclaredAssign + "<br><br>");

    // 5. Printing undeclared variable
    document.write("<b>5.</b> Printing undeclared variable gives ReferenceError in console.<br><br>");
    // console.log(abc); // Uncomment to see ReferenceError

    // 6. String literal with single & double quotes
    var str1 = 'Hello';
    var str2 = "World";
    document.write("<b>6.</b> " + str1 + " " + str2 + "<br><br>");

    // 7 & 8. Declare variable and print it
    var msg = "Hello JavaScript!";
    document.write("<b>7 & 8.</b> " + msg + "<br><br>");

    // 9. Declare two variables and print addition
    var n1 = 10, n2 = 20;
    var sum = n1 + n2;
    document.write("<b>9.</b> Addition = " + sum + "<br><br>");

    // 10. String literal example
    var greeting = "Welcome to JavaScript!";
    document.write("<b>10.</b> " + greeting + "<br><br>");

    // 11. Program for first name, last name, year of birth
    var firstName = "Tom";      // could use prompt("Enter first name:")
    var lastName = "Davis";     // could use prompt("Enter last name:")
    var year = "1982";          // could use prompt("Enter year of birth:")
    document.write("<b>11.</b> " + firstName + " " + lastName + " born on " + year + "<br><br>");
