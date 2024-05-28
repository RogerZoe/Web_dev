function wordCount(val) {
    // Initialize counts
    let charactersNoSpaces = 0;
    let characters = 0;
    let words = 0;
    let lines = 0;

    // Iterate through each character in the input text
    for (let i = 0; i < val.length; i++) {
        let char = val[i];
        characters++; // Increment total character count

        // Check if the character is a space
        if (char === ' ') {
            // If it's a space, increment total character count (excluding spaces)
            charactersNoSpaces++;
        }

        // Check for word boundaries
        if (char === ' ' || char === '\n' || char === '\r') {
            // If it's a space, newline, or carriage return, it indicates a word boundary
            // Increment word count
            words++;
        }

        // Check for newline characters
        if (char === '\n') {
            // If it's a newline character, increment line count
            lines++;
        }
    }

    // Adjust words count if the last character is not a word boundary
    if (val[val.length - 1] !== ' ' && val[val.length - 1] !== '\n' && val[val.length - 1] !== '\r') {
        words++;
    }

    // Adjust lines count if there's content but no newline at the end
    if (val.length > 0 && val[val.length - 1] !== '\n') {
        lines++;
    }

    // Return counts
    return {
        charactersNoSpaces: characters - charactersNoSpaces,
        characters: characters,
        words: words,
        lines: lines
    };
}
 
console.log(wordCount("My name is Arif"));