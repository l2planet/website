/**
 * ## cleanWords
 * The function that removes extra space characters from the strings which has multiple words.
 * ## Usage
 * ```js
 * let words = "hey    this  is   strange"
 * cleanWords(words) // "hey this is strange"
 * ```
 */
export function cleanWords(word: string) {
    const cleanedWords: string[] = []

    const words = word.trim().split(' ')

    for(let word of words) {
        word = word.trim()
        if(word.length > 0) {
            cleanedWords.push(word)
        }
    }

    return cleanedWords.join(' ')
}