var userInput = $(".search-term").val();

var api_request = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=dc6zaTOxFJmzC`;

var randomNumber = Math.floor(Math.random() * 51);

$(".search-button").click(function () {
  fetch(api_request)
    .then(function (response) {
      return response.json();
    })

    .then(function (response) {
      $(".main").html(
        `<img src="${response.data[`${randomNumber}`].images.original.url}>`
      );
    });
});
