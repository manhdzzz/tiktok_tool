/**
 * Fetches the HTML content of a given URL.
 *
 * @param {string} url The URL to fetch
 * @return {Promise<string>} The HTML content of the URL
 */
declare function fetchHTML(url: string): Promise<string>;
export default fetchHTML;
