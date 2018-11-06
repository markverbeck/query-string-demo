$(document).ready(function(){



  // -------Parse Query String------

    var url = window.location.href;
    var queryString = url.substring( url.indexOf('?') + 1 );
    

    var parseQueryString = function( queryString ) {
    var params = {}, queries, temp, i, l;
    // Split into key/value pairs
    queries = queryString.split("&");
    // Convert the array of strings into an object
    for ( i = 0, l = queries.length; i < l; i++ ) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
    }
    return params;
};

// ------Loop through and print Object to Dom------

var qString = parseQueryString(queryString);

for (x in qString){
  var entry = "<p><strong><span>" + x + "</span></strong>: " + qString[x] + "</p>";
  $("#paramsDiv").append(entry);
};

// ------Button functions------

$(".nextPage").click(function(){
  var page = $(this).val();
  console.log(page);
  window.location="http://localhost:8000/" + page + '/?' + queryString;
});

$("#homeButton").click(function(){
  window.location = "http://localhost:8000" + '/?' + queryString;
});

$("#urlButton").click(function(){
  var url = $("#urlInput").val();
  window.location = "//" + url + '/?' + queryString;
});


});
