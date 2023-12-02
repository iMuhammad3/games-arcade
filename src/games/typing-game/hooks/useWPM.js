
// Words per minute = (No.of words typed) / (elapsed time (in minutes))

export const useWPM = (startTime, endTime, wordsTyped) => {
    const elapsedTime = (endTime - startTime) / 60000; // Convert milliseconds to minutes
    const wpm = Math.round(wordsTyped / elapsedTime);

    return wpm;
};
