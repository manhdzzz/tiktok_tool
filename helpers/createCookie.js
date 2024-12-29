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
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = require("puppeteer");
function createCookie() {
    return __awaiter(this, void 0, void 0, function* () {
        console.info(`\n🍪 Creating cookie for API authentication...`);
        try {
            console.info(`\n🚀 Launching puppeteer to retrieve session cookie...`);
            const browser = yield (0, puppeteer_1.launch)({
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox'],
            });
            const page = yield browser.newPage();
            yield page.goto('https://www.tiktok.com/live', {
                waitUntil: ['domcontentloaded', 'networkidle2'],
            });
            const client = yield page.target().createCDPSession();
            const cookies = (yield client.send('Network.getAllCookies')).cookies;
            yield browser.close();
            console.info(`\n✅ Cookie successfully created for API usage.`);
            return cookies;
        }
        catch (error) {
            throw new Error(`❌ Failed to create cookie. Error: ${error}`).message;
        }
    });
}
exports.default = createCookie;
//# sourceMappingURL=createCookie.js.map