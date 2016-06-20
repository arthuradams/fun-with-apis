$(document).ready(function(){ // Once the document is ready

  url = "http://ineedaprompt.com/dictionary/default/prompt?q="
  searchTerm = "noun+noun+verb"
  $.getJSON(url + searchTerm, displayResult);

  $( "[id*='select']" ).change( function() { $.getJSON(url + searchTerm, displayResult) })

  function displayResult(response) {
    $("#team").text(response.english);

    console.log(response.english)
    console.log(printValues())
  }

  function printValues() {
    for (var i = 0; i <= 9; i++) {
      var selector = "select" + i
      console.log(selector + " is set to " + $('#' + selector).val())
    }
  }

});
