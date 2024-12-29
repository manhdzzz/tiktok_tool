"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function(resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function(resolve, reject) {
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
exports.setStreamData = void 0;
const getTiktokApiResponse_1 = __importDefault(require("../api/getTiktokApiResponse"));
const getWebCastTikTokApiResponse_1 = __importDefault(require("../api/getWebCastTikTokApiResponse"));

/**
 * It creates the stream data object with the stream url, title, user, status online, and if it's flv.
 *
 * @export
 * @param {string} roomId - The room ID of the live stream.
 * @return {Promise<StreamData>} - The StreamData object.
 * @throws {Error} - If the live stream url is empty or the user is offline.
 */
function setStreamData(roomId, cookie) {
    return __awaiter(this, void 0, void 0, function* () {
        const [hlsInfo, flvInfo] = yield Promise.all([
            getStreamInfo(roomId, cookie, 'HLS'),
            getStreamInfo(roomId, cookie, 'FLV'),
        ]);
        const onlineStatus = 2; // Assuming status 2 means online
        if (!hlsInfo.liveUrl && !flvInfo.liveUrl) {
            throw new Error(`❌ The user is offline or the live stream url is empty!`).message;
        }

        // Check if HLS stream is available and online
        if (hlsInfo.liveUrl && hlsInfo.liveStatus === onlineStatus) {
            console.info(`\n✅ [1] Found ${hlsInfo.liveUser} live stream URL! 🎉`);
            return {
                url: hlsInfo.liveUrl,
                title: hlsInfo.liveTitle,
                user: hlsInfo.liveUser,
                statusOnline: hlsInfo.liveStatus,
                isFlv: false,
            };
        }

        // If FLV stream is available and online, use FLV stream URL
        if (flvInfo.liveUrl && flvInfo.liveStatus === onlineStatus) {
            console.info(`\n✅ [2] Found ${flvInfo.liveUser} live stream URL! 🎉`);
            return {
                url: flvInfo.liveUrl,
                title: flvInfo.liveTitle,
                user: flvInfo.liveUser,
                statusOnline: flvInfo.liveStatus,
                isFlv: true,
            };
        }

        // If neither HLS nor FLV stream is available, throw an error
        throw new Error(`\n❌ No live stream URL found! This user is offline or the live URL is empty.`).message;
    });
}

exports.setStreamData = setStreamData;

function getStreamInfo(roomId, cookie, type) {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        if (type === 'HLS') {
            response = yield (0, getTiktokApiResponse_1.default)(roomId, cookie);
            return {
                liveUrl: response.LiveRoomInfo.liveUrl,
                liveTitle: response.LiveRoomInfo.title,
                liveUser: response.LiveRoomInfo.ownerInfo.nickname,
                liveStatus: response.LiveRoomInfo.status,
            };
        }

        // For FLV stream
        response = yield (0, getWebCastTikTokApiResponse_1.default)(roomId, cookie);
        // Safely handle flv_pull_url to avoid undefined errors
        if (response.data?.stream_url?.flv_pull_url) {
            return {
                liveUrl: response.data.stream_url.flv_pull_url.FULL_HD1 || response.data.stream_url.flv_pull_url.HD1,
                liveTitle: response.data.title,
                liveUser: response.data.owner.nickname,
                liveStatus: response.data.status,
            };
        } else {
            // Return empty or fallback value for FLV stream
            return {
                liveUrl: null,
                liveTitle: response.data?.title || 'Unknown',
                liveUser: response.data?.owner?.nickname || 'Unknown',
                liveStatus: response.data?.status || 0,
            };
        }
    });
}

//# sourceMappingURL=getStreamData.js.map
