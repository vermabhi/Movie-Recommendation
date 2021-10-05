$("ul :checkbox").on("click", function() {
    $(this).parent().toggleClass("done");
});

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type = 'text']").keypress(function(event){
    if(event.which === 13)
    {
        var data = $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+data+"</li>");
        $(this).val("");
    }
})

$("h1 i").on("click",function(){
    $("input").fadeToggle(200);
})