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
const path_1 = require("path");
const createCookie_1 = __importDefault(require("./createCookie"));
const fs_1 = require("fs");
function saveCookie() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sessionDir = (0, path_1.join)(process.cwd(), 'session');
            const cookieFilePath = (0, path_1.join)(sessionDir, 'cookie.txt');
            if (!(0, fs_1.existsSync)(sessionDir)) {
                console.info(`\n📁 Directory not found. Creating 'session' directory...`);
                (0, fs_1.mkdirSync)(sessionDir, { recursive: true });
                console.info(`\n📁 Directory 'session' created successfully.`);
            }
            const newCookie = yield (0, createCookie_1.default)();
            const cookieString = JSON.stringify(newCookie, null, 2);
            console.info(`\n📝 Saving cookie to '${cookieFilePath}'`);
            (0, fs_1.writeFileSync)(cookieFilePath, cookieString, { encoding: 'utf8' });
            console.info(`\n✅ Cookie successfully saved to file: ${cookieFilePath}`);
        }
        catch (error) {
            console.error(`\n❌ Error saving the cookie: ${error}`);
            throw new Error('Failed to save cookie.');
        }
    });
}
exports.default = saveCookie;
//# sourceMappingURL=saveCookie.js.map