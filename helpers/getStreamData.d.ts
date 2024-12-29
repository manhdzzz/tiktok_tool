import { StreamData } from '../types/StreamData';
/**
 * It creates the stream data object with the stream url, title, user, status online, and if it's flv.
 *
 * @export
 * @param {string} roomId - The room ID of the live stream.
 * @return {Promise<StreamData>} - The StreamData object.
 * @throws {Error} - If the live stream url is empty or the user is offline.
 */
export declare function setStreamData(roomId: string, cookie: string): Promise<StreamData>;
