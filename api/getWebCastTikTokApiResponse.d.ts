import { WebCastTikTokApiResponse } from '../types/WebCastTikTokApiInterface';
/**
 * It takes a roomId, makes a request to the tiktok api, and returns the response.
 *
 * @param {string} roomId - The room ID of the live stream.
 * @param {string} cookie - The cookie to be able to make the request.
 * @return {Promise<WebCastTikTokApiResponse>} - The response from the tiktok api.
 */
declare function getWebCastTikTokApiResponse(roomId: string, cookie: string): Promise<WebCastTikTokApiResponse>;
export default getWebCastTikTokApiResponse;
