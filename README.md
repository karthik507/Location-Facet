*How To Run the Application

*In Visual Code:
1.Just install the live server in the extension.
2.Extract the zip file blueoptima and open the folder blueoptima and click go to live button at the bottom right side.
3.The server starts running on your default port number and you can use the application.

*In Atom:
1.extract the file blueoptima and open in Atom.
2.Right click on HTML code and click on copy full path and then paste it on the browser like Chrome,Edge etc.
3.now you can start using the application.
4.no need of installing any extra packages all are done in java script ,in case if the flag-icon is not displaying then install:-
[npm install flag-icons] all the node_modules and flag-icons css file will be extracted.


*Detailing Steps to Configure

1.Started with bootstrap frame work included html starter template and linked both js file called index.js and css file called index.css.
2.Created a Search Bar & Filter Table by the function name  myFunction in index.js file.
3.Created a check box for each list using input field check box.
4.Installed flag-icon css file for rendering all the country flags in the list.
5 Styled the Search bar in css #myUL.
6.Started with minimize and maximize properties implemented in toggleClick function in js file.
7.Started with rotaing a div tag using rotateBtn by adding addEventListener and rotated to 270 and 90 degree respectively when the button is clicked.
8.Implemented Clear All button using the function clearAll checkbox in js file
9.Desined the div tag and scrolling effect in the css file id names are toggleBtn,aftertoggle,a1,button,clrBtn and all the countries id name.
10.Implemented an alphabetical letter index on the right hand side and Each character is clickable using buttons with onclick properties called search function() for each letter by taking the id name of each list in myUL tag.After clicking the character the function searchA(),searchB(),searchC(),searchD()..and so upto searchW() is called and scrolls the list to the first item starting with that letter.Using scrollIntoView() function.
11.nodumodules folder includes all the country flag icons and the dependencies in the css file for displaying all the country flags

*References
1.W3schools
2.Stackover Flow

Assumptions:
We planed to build this application using java script,html,css and bootstrap framework we didnt go for implementing the project using react framework since we are implementing only one single page webiste and with the one widget so it was sufficent to handle all the features using java script.

Improvements:
We planned to add animations using jquery to scroll the widget left and right side like the side nav bars which pops up when cliked and hides back with slow motion.
