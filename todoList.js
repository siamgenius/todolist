
    $("document").ready(function(){




    $("ul").on( "click", "li", function(){
     $(this).toggleClass("compleated");
    });

 /*  if($(this).css("color")==="rgb(0, 0, 255)")
   {
    $(this).css({
        color : "Black" ,
        textDecoration : "none"
         
    })
   }
      else{
              $(this).css({  
                          color :"blue",
                          textDecoration : "line-through"
                    })
           }
*/
$("ul").on("click","span", function(event){
$(this).parent().fadeOut(500,function(){
    $(this).remove()
});
event.stopPropagation();

});



$("input[type='text']").keypress(function(event){
    if(event.which === 13)
    {
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")

    }

})

$(".fa-plus-circle").click(function(){
    $("input[type='text']").fadeToggle();
})


});
