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
exports.downloadLiveStream = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const shelljs_1 = __importDefault(require("shelljs"));
const constants_1 = require("../utils/constants");
const fetchHTML_1 = __importDefault(require("./fetchHTML"));
const getStreamData_1 = require("./getStreamData");
const matchRoomId_1 = __importDefault(require("./matchRoomId"));
const buildFfmpegCommand_1 = __importDefault(require("./buildFfmpegCommand"));
const evaluateCookie_1 = __importDefault(require("./evaluateCookie"));

function downloadLiveStream(username, output, format) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!username) {
            throw new Error(`❌ The username is empty!`).message;
        }
        const acceptedFormats = ['mp4', 'mkv'];
        if (!acceptedFormats.includes(format)) {
            throw new Error(`❌ The format ${format} is not valid! Please use mp4 or mkv.`).message;
        }
        try {
            const sanitizedUsername = (0, constants_1.sanitizeUsername)(username);
            const liveUrl = (0, constants_1.newLiveUrl)(sanitizedUsername);
            const textHTML = yield (0, fetchHTML_1.default)(liveUrl);
            const roomId = (0, matchRoomId_1.default)(textHTML);
            const newCookie = yield (0, evaluateCookie_1.default)();
            const [streamData] = yield Promise.all([ 
                (0, getStreamData_1.setStreamData)(roomId, newCookie),
            ]);
            const { url, title, isFlv } = streamData;
            let fileName = (0, constants_1.fileNameOutput)(output, sanitizedUsername, format);
            let ffmpegCommand = (0, buildFfmpegCommand_1.default)(url, title, sanitizedUsername, fileName, format, isFlv);
            fs_1.default.mkdirSync(path_1.default.dirname(fileName), { recursive: true });
            console.info(`\n✅ Đang tiến hành tải live ${title} sẽ lưu tại ./${fileName}`);
            console.info(`\n❗ Quá trình sẽ hoàn tất khi phiên live kết thúc, vui lòng không tắt tool để tránh lỗi!\n`);
            shelljs_1.default.exec(ffmpegCommand, { async: true });
        } catch (error) {
            throw new Error(`❌ Error: ${error}`).stack;
        }
    });
}

exports.downloadLiveStream = downloadLiveStream;
