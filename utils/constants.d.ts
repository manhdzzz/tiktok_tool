/**
 * Constant for User-Agent header. It is used to make requests to the TikTok API.
 */
export declare const userAgent: string;
/**
 * It takes a string, checks if it starts with an @ symbol, and if it does, it returns the string
 * without the @ symbol
 * @param {string} username - The username to sanitize
 * @returns {string} string - The username without the @ symbol.
 */
export declare const sanitizeUsername: (username: string) => string;
/**
 * It takes a string as an argument and returns a string
 * @param {string} username - The username of the TikTok account you want to get the live URL for.
 * @returns {string} string - The live URL of the TikTok account.
 */
export declare function newLiveUrl(username: string): string;
/**
 * It takes a string as an argument and returns a string.
 *
 * @param {number} aId - The aId of the TikTok live stream.
 * @param {string} roomId - The room ID of the live stream.
 * @returns {string} string - The API URL of the live stream.
 */
export declare const tiktokApi: (roomId: string) => string;
/**
 * It takes the room ID of a TikTok live stream and returns the API URL of the live stream.
 *
 * @param {number} aId - The aId of the TikTok live stream.
 * @param {string} roomId - The room ID of the live stream.
 * @return {string} The API URL of the live stream.
 */
export declare const webcastTiktokApi: (roomId: string) => string;
/**
 * It takes a string as an argument and returns a string.
 *
 * @param {string} output - The output path for the downloaded live stream.
 * @param {string} username - The username of the TikTok account.
 * @param {string} format - The format of the downloaded live stream.
 * @returns {string} string - The name of the file to save the live stream to.
 */
export declare const fileNameOutput: (output: string, username: string, format: string) => string;
/**
 * It takes a string as an argument and returns a string.
 *
 * @param {string} liveUrl - The live URL of the TikTok live stream.
 * @param {string} title - The title of the TikTok live stream.
 * @param {string} username - The username of the TikTok account.
 * @param {string} fileName - The name of the file to save the live stream to.
 * @returns {string} string - The ffmpeg command to download the live stream.
 */
export declare const ffmpegCommandMP4: (liveUrl: string, title: string, username: string, fileName: string) => string;
/**
 * It takes a string as an argument and returns a string.
 *
 * @param {string} liveUrl - The live URL of the TikTok live stream.
 * @param {string} fileName - The name of the file to save the live stream to.
 * @returns {string} string - The ffmpeg command to download the live stream.
 */
export declare const ffmpegCommandMKV: (liveUrl: string, fileName: string) => string;
