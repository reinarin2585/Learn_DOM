Task 1

The document object gives JavaScript access to a webpage. It is provided by the browser.

We can use it to find and change HTML elements.

I used querySelector() and textContent to change text on my webpage.


Task 2

HTML elements can be found using their ID.

document.getElementById("myList") gives access to the list.

I used style.color to change the text color of the list to red.


Task 3

A button can be found using its ID.

textContent can change the text of a button.

style.color can change the text color of a button.


Task 4 = Presentation


Task 5.1 div

A div is a container for text and other HTML elements.

JavaScript can access a div using its ID.

Properties like textContent, style.backgroundColor and style.padding can change the text, background color and padding.


Task 5.2 input

An input element lets users enter information, like text or numbers.

The placeholder property shows a hint inside an empty input field.

Input elements are not just text fields. They can also be radio buttons or checkboxes.


Task 5.3 form

A form is a container for different input elements (e.g. text fields, checkboxes, radio buttons).

A form can submit data. A button with type="submit" submits the form, while type="button" does not submit it automatically.

JavaScript can access a form using its ID and change properties like background color and padding.


Task 5.4 table

A table displays data in rows (tr) and cells (th for headers, td for data). The text in these cells can be changed using textContent.

Properties give us information about an element (e.g. rows, cells), while methods perform actions (e.g. insertRow()).

JavaScript can add new rows (insertRow()) and cells (insertCell()) to a table or remove rows (deleteRow()).


Task 5.5 ul

A ul is an unordered list, and each list item is an li element.

The text can be read or changed with textContent, and the bullet style can be changed with style.listStyleType.

New list items can be created with createElement("li"), given text with textContent, and added to the list with appendChild(). Items can also be removed with remove().


Task 5.6 select & option

select and option are used together to create a dropdown menu.

JavaScript can add new options using createElement("option") and add().

Each option has a value (the stored value) and textContent (the text shown to the user). Both can be changed with JavaScript.