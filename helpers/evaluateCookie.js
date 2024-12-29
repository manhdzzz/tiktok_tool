"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const saveCookie_1 = __importDefault(require("./saveCookie"));
const loadCookie_1 = require("./loadCookie");
function evaluateCookie() {
    return __awaiter(this, void 0, void 0, function* () {
        const currentTimeUnix = Math.floor(Date.now() / 1000);
        if (!(0, fs_1.existsSync)('./session/cookie.txt')) {
            console.info(`\n🍪 Cookie file not found. Creating new cookie.`);
            yield (0, saveCookie_1.default)();
        }
        const cookiesArray = (0, loadCookie_1.loadCookie)();
        console.info(`\n🍪 Cookie loaded. Evaluating cookie...`);
        const isExpired = cookiesArray.some((cookie) => {
            if (cookie.name === 'msToken' && cookie.domain === 'www.tiktok.com') {
                return cookie.expires < currentTimeUnix;
            }
            return false;
        });
        if (isExpired) {
            console.info(`\n🍪 Cookie is expired. Creating new cookie.`);
            (0, saveCookie_1.default)();
        }
        const cookieString = (0, loadCookie_1.cookieToString)((0, loadCookie_1.loadCookie)());
        return cookieString;
    });
}
exports.default = evaluateCookie;
//# sourceMappingURL=evaluateCookie.js.map