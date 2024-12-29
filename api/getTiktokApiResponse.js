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
const constants_1 = require("../utils/constants");
/**
 * It takes a roomId, makes a request to the tiktok api, and returns the response.
 *
 * @param {string} roomId - The room ID of the live stream.
 * @param {string} cookie - The cookie to be able to make the request.
 * @return {Promise<TikTokApiResponse>} - The response from the tiktok api.
 */
function getTiktokApiResponse(roomId, cookie) {
    return __awaiter(this, void 0, void 0, function* () {
        const api = (0, constants_1.tiktokApi)(roomId);
        const response = yield fetch(api, {
            headers: {
                cookie: cookie,
                'User-Agent': constants_1.userAgent,
            },
        });
        const data = yield response.json();
        const tiktokResponse = {
            LiveRoomInfo: data.LiveRoomInfo,
            extra: data.extra,
            log_pb: data.log_pb,
            statusCode: data.statusCode,
            status_code: data.status_code,
            status_msg: data.status_msg,
        };
        return tiktokResponse;
    });
}
exports.default = getTiktokApiResponse;
//# sourceMappingURL=getTiktokApiResponse.js.map