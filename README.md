# JSVJP Library

A lightweight JavaScript library for DOM manipulation.

## Installation

You can install the library using npm:

```bash
npm install jsvjp
```

## Usage

Import style you need from the library:

```html
<link rel="stylesheet" href="jsvjp/style.css" />
<!-- or you can import from https://unpkg.com/jsvjp -->
<link rel="stylesheet" href="https://unpkg.com/jsvjp/style.css" />
```

Import the functions you need from the library:

```js
import { $, $$, HTML, CSS } from "jsvjp";
import log from "jsvjp";
// or you can import from https://unpkg.com/jsvjp
import { $, $$, HTML, CSS } from "https://unpkg.com/jsvjp";
import log from "https://unpkg.com/jsvjp";
```

Use the functions to manipulate the DOM:

```js
HTML("h1", "success", "Welcome to jsvjp!");

CSS("h1.success", {
  color: "red",
  backgroundColor: randomColor(),
  padding: "10px",
});

const html = HTML("a", "link", "Follow me on github", {
  href: "https://github.com/duongnguyen321/jsvjp",
  target: "_blank",
});

log(html.outerHTML, [{ This: { is: "an" }, example: "!" }]);
```

## Functions

1. Use the `$` function to find the first HTML element that matches a CSS selector:

```js
const firstElement = $("h1");
console.log(firstElement); // Outputs the first HTML element with the <h1> tag
```

2. Use the `$$` function to find all HTML elements that match a CSS selector:

```js
const allElements = $$("p");
console.log(allElements); // Outputs an array containing all HTML elements with the <p> tag
```

3. Use the `HTML` function to create a new HTML element and add content to it:

```js
HTML("div", "class", "This is the content of the new div element");
HTML("a", "link", "This is google!", { href: "https://google.com" });
// Outputs the newly created HTML element
```

4. Use the `CSS` function to change the CSS properties of one or more HTML elements:

```js
CSS("p", "color", "red"); // Sets the text color of all elements with the <p> tag to red
CSS("header#header", "font-size", "24px"); // Sets the font size of the element "header" to 24px
```

5. Use the `log` function to display data in the browser using HTML tags:

```js
log("Hello, world!"); // Displays the string "Hello, world!" in a div with class "code"
log([1, 2, 3]); // Displays an array of numbers in a pre tag formatted as JSON
```

## Contributing

Contributions are welcome! Please see the [CONTRIBUTING](docs/CONTRIBUTING.md) file for guidelines.
