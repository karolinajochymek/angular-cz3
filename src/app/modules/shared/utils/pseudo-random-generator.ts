export function generateRandomNumber(minVal: number, maxVal: number): number {
    return Math.floor(Math.random() * maxVal) + minVal;
}

export function generateRandomNumbersArray(minVal: number, maxVal: number, maxLength: number = 10): number[] {
    const array = [];

    for ( var i = 0; i < maxLength; i++ ) {
        array.push(Math.floor(Math.random() * maxVal) + minVal);
    }

    return [...new Set(array)];
}

export function generateRandomLettersText(maxLength: number = 10): string {
    const array = [];
    const characters = 'abcdefghijklmnopqrstuvwxyz';

    for ( var i = 0; i < maxLength; i++ ) {
        array.push(characters.charAt(Math.floor(Math.random() * characters.length)));
    }

    return array.join('');
}