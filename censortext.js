var censoredWords = ["sad", "bad", "mad"];
 var customCensoredWords = [];
 function censor(inStr) {
   for (idx in censoredWords) {
     inStr = inStr.replace(censoredWords[idx], "****", "g");
  }
   for (idx in customCensoredWords) {
    inStr = inStr.replace(customCensoredWords[idx], "****", "g");
  }
   return inStr;
 }
 function addCensoredWord(word){
   customCensoredWords.push(word);
}
function getCensoredWords(){
   return censoredWords.concat(customCensoredWords);
 }
 exports.censor = censor;
 exports.addCensoredWord = addCensoredWord;
 exports.getCensoredWords = getCensoredWords;
