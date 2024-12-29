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
/**
 * Fetches the HTML content of a given URL.
 *
 * @param {string} url The URL to fetch
 * @return {Promise<string>} The HTML content of the URL
 */
function fetchHTML(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = yield fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) ' +
                    'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
                'Accept-Language': 'en-US,en;q=0.9',
            },
        }).then((res) => res.text());
        console.info(`✅ ${body.length} bytes fetched from ${url}`);
        return body;
    });
}
exports.default = fetchHTML;
//# sourceMappingURL=fetchHTML.js.map