/**
 * @default
 * @param {...*} dataArgs - Any data to log
 */
declare function log(...dataArgs: any[]): void;

/**
 * @returns {string} - A random color from the colors list
 */
declare function randomColor(): String;

/**
 * @param {string} selector - A CSS selector to search for an element
 * @param {string=} errorMessage - An error message to display if no element is found
 * @returns {Element} The element that was found
 * @throws {Error} If no element is found and no error message is provided
 */
declare function $(selector: string, errorMessage?: string): Element;

/**
 * @param {string} selector - A CSS selector to search for an element
 * @param {string=} errorMessage - An error message to display if no element is found
 * @returns {Array} - The Array from element that was found
 * @throws {Error} - If no element is found and no error message is provided
 */
declare function $$(selector: string, errorMessage?: string): Element[];

/**
 * @param {string} tagName - The tag name of the element to create
 * @param {string=} className - The class name of the element to create
 * @param {string=} text - The text content of the element to create
 * @param {object=} options - Any additional options to apply to the element
 * @returns {HTMLElement} - The element that was created
 */
declare function HTML(
  tagName: string,
  className?: string,
  text?: string,
  options?: Record<string, string>
): HTMLElement;

/**
 * @param {string} selector - A CSS selector to search for an element
 * @param {object=} options - Options to be passed to the selector
 * @returns {Element} - A Element after styled
 */
declare function CSS(
  selector: string,
  options: Record<string, string>
): Element;
