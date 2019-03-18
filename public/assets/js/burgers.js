console.log("hi")
$(function(){
    console.log("hi")
    $(".delete-food").on("click", function(evnet){
        event.preventDefault()
        var id = $(this).data("id");
        var newDev = $(this).data("newDevoured");

        var updateDev = {
            devoured: newDev
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: updateDev
        }).then(
            function(){
                location.reload();
            }
        )
    })
})

$(".create-form").on("click", function(event){
    event.preventDefault();
    var newFood = {
        name: $("#ca").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
    };
    console.log(newFood)
    $.ajax("/api/burgers", {
        type: "POST",
        data: newFood
    }).then(function(){
        location.reload()
    })
})

$(".delete-food").on("click", function(event){
    var id = $(this).data("id");

    $.ajax("/api/burgers" + id, {
        type: "DELETE"
    }).then(function(){
        location.reload();
    })
})