/**
 * Extracts the room id from the HTML body of the TikTok live stream page.
 *
 * @param {string} extractedHTML - The HTML body of the TikTok live stream page.
 * @return {string} - The room id of the live stream.
 */
declare function matchRoomId(extractedHTML: string): string;
export default matchRoomId;
