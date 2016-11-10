$(".headLine").hover(function(){
	$(this).text("Web Developer /  Resume");
},function(){
	$(this).text("前端工程师  /  个人简历");
});


$("#fullpageMenu").find("a").hover(function(){
	$(this).css("border-bottom","2px solid #0055ff");
},function(){
	$(this).css("border-bottom","");
});

//第一屏动画
function section1(){
	$(".Text").slideDown(1000,function(){
		$(".my_name").slideDown(400,function(){
			$(".my_job").slideDown(400,function(){
				$(".Goal").slideDown(400,function(){
					$(".my_email").slideDown(400);
				});
			});
		});
	});
};
// 第二屏动画
function section2(){
	$('.conTent').show(function(){
		$('.conTent').animate({width:"600px",height:"180px"},1000,function(){
			move('.conTent .Img1').rotate(360).end();
			move('.conTent .Img2').rotate(360).end();
			move('.conTent .Img3').rotate(360).end();
			move('.conTent .Img4').rotate(360).end();
			$('.con_ico div').slideDown()
		});
		$(".conText").fadeIn(1000);
	});
};
//第三屏动画
function section3(){
	if ($(".section_3 img").width()!="90") {
		$(".section_3 img").animate({width:"90px",height:"90px"},500,function(){
			$(".section_3 ul").slideDown(300);
		});
	}else{
		return false;
	}	
};
// 第四屏动画
function section4(){

};

//交互动画
$(".section_3 img").on("click",function(){
	$(this).next("ul").slideToggle(300);
});

$(".Exp>li").not(".myP").on("click",function(event){
		var index=$(this).index();	
		$(".Exp>li>p").on("click",function(event){
		  	return false;
		});
		$(".Exp>li>p").eq(index).slideToggle(300);
		$(".Exp>li>span").eq(index).toggleClass("xuan");
});
