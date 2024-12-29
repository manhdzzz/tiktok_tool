"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffmpegCommandMKV = exports.ffmpegCommandMP4 = exports.fileNameOutput = exports.webcastTiktokApi = exports.tiktokApi = exports.newLiveUrl = exports.sanitizeUsername = exports.userAgent = void 0;
/**
 * Constant for User-Agent header. It is used to make requests to the TikTok API.
 */
exports.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';
/**
 * It takes a string, checks if it starts with an @ symbol, and if it does, it returns the string
 * without the @ symbol
 * @param {string} username - The username to sanitize
 * @returns {string} string - The username without the @ symbol.
 */
const sanitizeUsername = (username) => {
    return username.startsWith('@') ? username.substring(1) : username;
};
exports.sanitizeUsername = sanitizeUsername;
/**
 * It takes a string as an argument and returns a string
 * @param {string} username - The username of the TikTok account you want to get the live URL for.
 * @returns {string} string - The live URL of the TikTok account.
 */
function newLiveUrl(username) {
    return `https://www.tiktok.com/@${username}/live`;
}
exports.newLiveUrl = newLiveUrl;
/**
 * It takes a string as an argument and returns a string.
 *
 * @param {number} aId - The aId of the TikTok live stream.
 * @param {string} roomId - The room ID of the live stream.
 * @returns {string} string - The API URL of the live stream.
 */
const tiktokApi = (roomId) => {
    return `https://www.tiktok.com/api/live/detail/?aid=1988&roomID=${roomId}`;
};
exports.tiktokApi = tiktokApi;
/**
 * It takes the room ID of a TikTok live stream and returns the API URL of the live stream.
 *
 * @param {number} aId - The aId of the TikTok live stream.
 * @param {string} roomId - The room ID of the live stream.
 * @return {string} The API URL of the live stream.
 */
const webcastTiktokApi = (roomId) => {
    return `https://webcast.tiktok.com/webcast/room/info/?aid=1988&room_id=${roomId}`;
};
exports.webcastTiktokApi = webcastTiktokApi;
/**
 * It takes a string as an argument and returns a string.
 *
 * @param {string} output - The output path for the downloaded live stream.
 * @param {string} username - The username of the TikTok account.
 * @param {string} format - The format of the downloaded live stream.
 * @returns {string} string - The name of the file to save the live stream to.
 */
const fileNameOutput = (output, username, format) => {
    if (output.endsWith('.mp4') || output.endsWith('.mkv')) {
        return output;
    }
    const sanitizedOutput = output.endsWith('/')
        ? output.slice(0, -1)
        : output;
    const timeStamp = new Date().toLocaleString().replace(/[^\d]/g, '');
    return `${sanitizedOutput}/${username}-${timeStamp}.${format}`;
};
exports.fileNameOutput = fileNameOutput;
/**
 * It takes a string as an argument and returns a string.
 *
 * @param {string} liveUrl - The live URL of the TikTok live stream.
 * @param {string} title - The title of the TikTok live stream.
 * @param {string} username - The username of the TikTok account.
 * @param {string} fileName - The name of the file to save the live stream to.
 * @returns {string} string - The ffmpeg command to download the live stream.
 */
const ffmpegCommandMP4 = (liveUrl, title, username, fileName) => {
    return `ffmpeg -i "${liveUrl}" -movflags use_metadata_tags -map_metadata 0 -metadata title="${title}" -metadata artist="${username}" -metadata year="${new Date().getFullYear()}" -c copy "${fileName}" -n -stats -hide_banner -loglevel error`;
};
exports.ffmpegCommandMP4 = ffmpegCommandMP4;
/**
 * It takes a string as an argument and returns a string.
 *
 * @param {string} liveUrl - The live URL of the TikTok live stream.
 * @param {string} fileName - The name of the file to save the live stream to.
 * @returns {string} string - The ffmpeg command to download the live stream.
 */
const ffmpegCommandMKV = (liveUrl, fileName) => {
    return `ffmpeg -i "${liveUrl}" -c:v hevc -crf 23 -c:a copy "${fileName}" -n -stats -hide_banner -loglevel error`;
};
exports.ffmpegCommandMKV = ffmpegCommandMKV;
//# sourceMappingURL=constants.js.map