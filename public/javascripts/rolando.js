$(document).ready(function() {
  $.ajax({
    url : '/books',
    method : 'get',
    success : function(books){
      $('.book-index').append(books);
    },
    error : function(err){
      console.log("Error from GET to /books", err);
    }
  });
});
