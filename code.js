function searchWiki() {
    var txt = $('input').val();

    $.ajax({
               type: "GET",
               url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=' + txt,
               dataType: 'jsonp',
               success: function(data) {
                   // console.log(data);
                   $.each(data.query.pages, function(index, item) {
                       var html = "<h3>" + item.title + "</h3>";
                       html += "<p>" + item.extract + "</p>";
                       $('.results').html(html);
                   })
               }
           });
}