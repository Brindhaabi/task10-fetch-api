function getQuote() {
  fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => {
      const random = Math.floor(Math.random() * data.length);
      document.getElementById("quote").innerText =
        data[random].text + " — " + (data[random].author || "Unknown");
    })
    .catch(error => {
      document.getElementById("quote").innerText = "Error fetching quote";
    });
}
