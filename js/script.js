$(".search-button").click(function () {
  var userInput = $(".search-term").val();
  
  var api_request = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=kVDaGVdpWz9cRhh2NgHxVanTubQA8D9z`;
  
  fetch(api_request)
    .then(function (response) {
      return response.json();
    })

    .then(function (response) {
      var randomNumber = Math.floor(Math.random() * response.data.length);
      $(".main").html(
        `<img src="${response.data[randomNumber].images.original.url}"/>`
      );
      $(".modal").css("display","block");
    });
  $("body").click(function(){
    $(".modal").css("display","none");
  });
});
