$(function() {
    $(".toggle").on("click",function(){
        if($(".item").hasClass("res")){
            $(".item").removeClass("res");
        }
         else{
            $(".item").addClass("res");
        }
    })
});