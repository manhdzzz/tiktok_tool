import { TikTokApiResponse } from '../types/TikTokApiInterface';
/**
 * It takes a roomId, makes a request to the tiktok api, and returns the response.
 *
 * @param {string} roomId - The room ID of the live stream.
 * @param {string} cookie - The cookie to be able to make the request.
 * @return {Promise<TikTokApiResponse>} - The response from the tiktok api.
 */
declare function getTiktokApiResponse(roomId: string, cookie: string): Promise<TikTokApiResponse>;
export default getTiktokApiResponse;
