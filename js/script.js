let search = document.getElementById("search");
let text = document.getElementById("text");
search.addEventListener("keyup", () => {
  let input = document.getElementById("search").value;
  let replaceData = new RegExp(input, "ig");
  text.innerHTML = text.innerText.replace(replaceData, `<span>${input}</span>`);
});
