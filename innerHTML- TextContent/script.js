const exampleEle = document.getElementById("example");

const changeTextContent = document.getElementById("changeTextContent");

const changeInnerHTML = document.getElementById("changeInnerHTML");

changeTextContent.addEventListener("click", function () {
  exampleEle.textContent = "This is a plain text  without HTML formatting";
});

changeInnerHTML.addEventListener("click", function () {
  exampleEle.innerHTML =
    "This is an <em>italic</em> and <strong>bold</strong> text with HTML formatting.";
});
