// import { $, $$, HTML, CSS, randomColor } from "https://unpkg.com/jsvjp";
// import log from "https://unpkg.com/jsvjp";
import { HTML, CSS, randomColor } from "../index.min.js";
import log from "../index.min.js";

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
