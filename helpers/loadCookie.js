"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookieToString = exports.loadCookie = void 0;
const fs_1 = require("fs");
function loadCookie() {
    let cookiesData = (0, fs_1.readFileSync)(`./session/cookie.txt`, 'utf8');
    let cookiesArray = JSON.parse(cookiesData);
    return cookiesArray;
}
exports.loadCookie = loadCookie;
function cookieToString(cookies) {
    let cookiesArray = cookies;
    let cookieString = cookiesArray
        .map((cookie) => `${cookie.name}=${cookie.value}`)
        .join('; ');
    console.info(`\n🍪 Cookie string created.`);
    return cookieString;
}
exports.cookieToString = cookieToString;
//# sourceMappingURL=loadCookie.js.map