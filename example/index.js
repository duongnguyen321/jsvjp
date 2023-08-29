// import { log, $, $$, HTML, CSS, randomColor } from "https://unpkg.com/jsvjp";
import {log, HTML, CSS, randomColor } from "../index.js";

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
