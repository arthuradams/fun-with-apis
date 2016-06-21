$(document).ready(function(){ // Once the document is ready

  function printValues() {
    for (var i = 0; i <= 9; i++) {
      var selector = "select" + i
//      console.log(selector + " is set to " + $('#' + selector).val())
    }
  }

  function getQueryString(maxSelector) {
    var queryValues = []
    for (var i = 0; i < maxSelector; i++) {
      var selector = "select" + i
      var value = $('#' + selector).val()
      if (value > 0) {
        console.log("value is " + value.toString())
        queryValues.push(options[value])
      }
    }
    console.log("The query string is " + queryValues.join("+"))
    return queryValues.join("+")
  }

  function addSelectors(count,init) {

    for (var i = 0; i < count; i++) {
      var selectorNumber = i + init
      var id = "select" + selectorNumber
      var sel = $('<select>').appendTo('#myselectors')
      $(sel).attr('id', id)
      $(sel).change( function() { $.getJSON(url + getQueryString(), displayResult) })

      for (var j = 0; j < options.length; j++) {
        $('#' + id).append($('<option>', { value: j, text : options[j]}))
      }
    }
    return selectorNumber
  }

  var initialSelectors = 10
  var options = ["","Adjective","Noun","Adverb","Verb","Location"]
  var nextNewSelector = 0;

  nextNewSelector = addSelectors(initialSelectors,nextNewSelector);

  url = "http://ineedaprompt.com/dictionary/default/prompt?q="
  searchTerm = "adjective+noun+adverb+verb+adjective+noun+adverb+verb+location"
  $.getJSON(url + searchTerm, displayResult);

  $( "[id*='select']" ).change( function() { $.getJSON(url + getQueryString(nextNewSelector), displayResult) })

  function displayResult(response) {
    $("#team").text(response.english)
    console.log(response.english)
    console.log(printValues())
  }

});
