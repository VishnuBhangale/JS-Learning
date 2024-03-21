function oddPositionedChars(word) {
    for (let index = 0; index < word.length; index++) {
        const element = word.charAt(index);
        if (index%2!=0) {
            console.log(element);
        }
    }
}
var str="Hard Work always pays back";
oddPositionedChars(str.replaceAll(" ",""));