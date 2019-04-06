$(document).ready(function() {
    
  $(".devour-from").on("click", function(event) {
    event.preventDefault();
    var id= $(this).data("id")
    var burger_id = $(this).children(".burger_id").val();
    console.log(burger_id);
    $.ajax({
      method: "PUT",
      data: { devoured: true },
      url: "/burgers/" + id
    }).then(function(data) {
      // reload page to display devoured burger in proper column
      location.reload();
    });

    
  });
});