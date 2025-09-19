let element = document.querySelector("#para p");
console.log(element);
let text = element.innerHTML;
console.log(text);
let words = text.split(/(\s+|,|\.|\!|\?|\:|\;|\-)/);
console.log(words);
let process = words.map((word) => {
  if (word.length > 8) {
    return `<span id ="answer">${word}</span>`;
  }
  if (word.includes("?")) {
    return " ==> ";
  }
  if (word.includes(".")) {
    return " <== ";
  }
  if(word.includes(','))
    {
        return " --> "
    }
  return word;
});
let combine = process.join("");
element.innerHTML = combine;
