# JSVJP Library

A lightweight JavaScript library for DOM manipulation.

## Installation

You can install the library using npm:

    `npm install jsvjp`

## Usage

Import the functions you need from the library:

    `import { $, $$, HTML, CSS, log } from 'jsvjp';`

Use the functions to manipulate the DOM:

    	`HTML("div", "example", "This is the content of a new div element");
        HTML("div", "example2", "This is the content of a new div element with red color"); 		        
        CSS("div.example2", "color", "red");
        const AllElement = $$("div");
        const firstElement = $("div.example");
        console.log(AllElement);
        console.log(firstElement);
        log(log);
        log('This is a log message');`

## Functions

- `$()`: Selects the first element that matches a given CSS selector.
- `$$()`: Selects all elements that match a given CSS selector.
- `HTML()`: Creates a new HTML element with the specified tag name, class name and content, and appends it to the body.
- `CSS()`: Changes the value of a CSS property for the elements that match a given CSS selector.
- `log()`: Logs a message to the console.

## Contributing

Contributions are welcome! Please see the [CONTRIBUTING](CONTRIBUTING.md) file for guidelines.
