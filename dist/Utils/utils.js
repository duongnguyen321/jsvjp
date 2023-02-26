import { colorsList as t, wordsList as e } from "../Themes/themes.js";
const n = function (t, e) {
    "string" == typeof t && "" !== t.trim() || o("h1", "error", "Invalid selector");
    const n = document.querySelector(t);
    if (!n) throw new Error(e || "No element found matching selector: ".concat(t));
    return n
}, r = function (t, e) {
    "string" == typeof t && "" !== t.trim() || o("h1", "error", "Invalid selector");
    const n = document.querySelectorAll(t);
    if (0 === n.length) throw new Error(e || "No elements found matching selector: ".concat(t));
    return Array.from(n)
}, o = function (t, e, r) {
    t && "string" == typeof t || o("h1", "error", "Invalid tag name");
    const c = document.createElement(t);
    return r && (c.textContent = r), e && c.classList.add(e), n("body").appendChild(c), c
}, c = function (t, e, r) {
    const o = n(t, 'No element matches the selector "'.concat(t, '"'));
    o instanceof Array ? o.forEach((function (t) { return t.style[e] = r })) : o.style[e] = r
}, s = function () {
    const e = t; return e[Math.floor(Math.random() * e.length)]
}, a = function (t) {
    if (void 0 === t) o("h1", "error", "data cannot be undefined");
    else {
        const r = o("pre"), c = o("code");
        let a; try { JSON.parse(t), a = JSON.stringify(JSON.parse(t), null, 2) }
        catch (e) { a = Array.isArray(t) || "object" == typeof t ? JSON.stringify(t, null, 2) : String(t) }
        if (Array.isArray(t) || "object" == typeof t) c.innerText = a;
        else {
            r.classList.add("code"); const t = e, n = new RegExp(Object.keys(t).join("|") + "|[^ws]", "gi"), o = [],
                i = a.replace(n, (function (e) {
                    if (t.hasOwnProperty(e)) return '<span style="color:'.concat(t[e].color, '">').concat(e, "</span>");
                    if (/[(){}\[\]]/.test(e)) {
                        const t = s(); if ("(" === e || "{" === e || "[" === e) return o.push(t),
                            '<span style="color:'.concat(t, '">').concat(e, "</span>"); {
                            const t = o.pop() || s();
                            return '<span style="color:'.concat(t, '">').concat(e, "</span>")
                        }
                    } return e
                })); c.innerHTML = i
        } r.appendChild(c), n("body").appendChild(r)
    }
};
export { n as $, r as $$, o as HTML, c as CSS, a as log };