"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../utils/constants");
function buildFfmpegCommand(url, title, username, fileName, format, isFlv) {
    if (isFlv) {
        const newFileName = (0, constants_1.fileNameOutput)(fileName, username, 'mkv');
        return (0, constants_1.ffmpegCommandMKV)(url, newFileName);
    }
    return format === 'mp4'
        ? (0, constants_1.ffmpegCommandMP4)(url, title, username, fileName)
        : (0, constants_1.ffmpegCommandMKV)(url, fileName);
}
exports.default = buildFfmpegCommand;
//# sourceMappingURL=buildFfmpegCommand.js.map