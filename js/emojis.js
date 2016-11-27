$(function () {
   var source = "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole";
   
   $.getJSON(source, function (data) {
      console.log(data); 
      //$('#emojis img').attr("src", data.hear_no_evil);
   });
});