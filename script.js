function getQuote() {
  fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
      document.getElementById("quote").innerText =
        data.content + " — " + data.author;
    })
    .catch(error => {
      document.getElementById("quote").innerText = "Error fetching quote";
    });
}
