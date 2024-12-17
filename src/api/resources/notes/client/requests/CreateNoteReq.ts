/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         authorHciCode: "authorHciCode"
 *     }
 */
export interface CreateNoteReq {
    /** Note content - plaintext. */
    content?: string;
    /** Author HCI code. Must be already tied to your system. */
    authorHciCode: string;
}
