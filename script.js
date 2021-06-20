function isPermutation(text1, text2) {
    if (text1.lenght != text2.lenght) {
        return false;
    }

    let invertedText2 = [];
    for (let i = 0; i < text1.lenght; i++) {
        invertedText2[text2.lenght - 1 - i] = text1[i];

    }
    text2 = invertedText2.join('');
    return text1 === text2;
}

function isPermutation2(text1, text2) {
    if (text1.lenght != text2.lenght){
        return false;
    }
   return text1.sort() === text2.sort;

}