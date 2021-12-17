$(".navi>li").mouseover(function(){

  $(this).find(".submenu").stop().slideDown(300);
  });

$(".navi>li").mouseout(function(){

  $(this).find(".submenu").stop().slideUp(300);
  });



$(".notice").mouseover(function(){
    $("#op1").css("opacity","0.7");
});
$(".notice").mouseout(function(){
    $("#op1").css("opacity","1.0");
});

$(".banner1").mouseover(function(){
    $("#op2").attr("src","images/back4.jpg")
});
$(".banner1").mouseout(function(){
    $("#op2").attr("src","images/back2.jpg")
});

$(".banner2").mouseover(function(){
    $("#op3").fadeIn("slow");
});
$(".banner2").mouseout(function(){
    $("#op3").fadeOut("slow");
});

//        모달
$("#m").click(function(){
    $("#modal").addClass("active");
});
$(".btn").click(function(){
    $("#modal").removeClass("active");
});