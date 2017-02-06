/* TASK ONE
Access HTML element with id tag-line.

Access all headings that belong to div with the class name bg-main-content.

Create the variable collect and assign it with content of tag-line.

Loop through the array of headings and append the content of each heading to variable collect

After the loop, use alert to print collect
*/

var tl = document.getElementById("tag-line");

var bgHeadings = document.querySelectorAll(".bg-main-content h2");

var collect  = tl.innerHTML + "\n----------------\n";

for (var y = 0; y < bgHeadings.length; y += 1) {
    collect += bgHeadings[y].innerHTML + "\n";
 }

alert(collect);


/*TASK TWO
Access 13th div with class name box that belongs to div with the class name bg-main-content. 
You can name the variable when_to_launch.

Use property children to "scoop" in array all HTML elements that belong to that div.
Create the variable collect and assign it with content of heading that belongs to gotten array.

Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.

After the loop, use alert to print collect
*/

var when_to_launch = document.querySelectorAll(".bg-main-content .box")[12];
var boxElements = when_to_launch.children;

collect = boxElements[0].innerHTML + "\n-----------------\n";

for (var k = 1; k < boxElements.length; k += 1) {
    collect += boxElements[k].innerHTML + "\n" + "\n";
 }

alert(collect);
