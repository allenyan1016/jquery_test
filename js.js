
$(function(){
	var $html = '<img src="marks.jpg" title="marks" id="img1">';
	$html += '<div id="contro">控制</div>';
	$html += '<div id="list_test">列表</div>';
	$html += '<div class="c1">list1</div>';
	$html += '<div class="c1">list2</div>';
	$html += '<div class="c1">list3</div>';
	$html += '<img src="marks.jpg" title="marks" id="img2">';
	$html += '<div id="contro2">切换</div>';
	$html += '<img src="marks.jpg" title="marks" id="img3">';
	$html += '<div id="contro3">变换</div>';
	$html += '<div id="contro4">回到顶部</div>';
	$html += '<ul></ul>';
	$html += '<li>你</li>';
	$html += '<li>是</li>';
	$html += '<li class="c2">猪</li>';
	$html += '<li>吗</li>';
	$html += '<li class="c3">html</li>';
	$html += '<li class="c3">js</li>';
	$html += '<li class="c3">css</li>';
	$html += '<li>vue</li>';
	$("#zt").append($html);
	// 使用fadeToggle,fadeIn,fadeOut三个方法控制淡入淡出效果
	$("#contro").click(function(){
		$("#img1").fadeToggle(1000);
	})
	// 使用toggle，hide，show三个方法控制显示和隐藏效果
	$("#contro2").click(function(){
		$("#img2").toggle(500);
	})
	// 使用slideUp，slideDown，slideToggle三个方法控制元素的下拉与收缩
	$("#list_test").click(function(){
		$(".c1").slideToggle();
	})
	// 使用animate方法控制元素属性的变化
	// $("#contro3").click(function(){
	// 	$("#img3").animate({"width":"100px","height":"100px"},1000,function(){
	// 		$("#img3").css("border","1px dashed black");
	// 	});
	// })
	$("#contro3").click(function(){
		$("#img3").animate({width:"100px"},1000).animate({height:"100px"},1000).css(
			"border","5px soild red").fadeToggle(500);
	})
	// 制作“回到顶部”按钮
	// 控制回到顶部按钮时候显示还是不显示，
	$("winodw").scroll(function(){
		if($(this).scrollTop()>50){
			$("#contro4").show();
		}else{
			$("#contro4").hide();
		}
	})
	// 控制按钮功能，点击后回到页面顶部
	$("#contro4").click(function(){
		$("html,body").animate({scrollTop:0},100);
	})
	// 使用hasClass方法过滤同一元素不同类的选择并控制选中元素
	$("li").click(function(){
		if($(this).hasClass("c2")){
		$(this).css("color","red");
	}
	})
	// $(".c2").css("color","red");
	//使用eq方法选择一系列元素的某一个元素
	$("li").eq(0).click(function(){
		$(this).css("color","blue");
	})
	// $("li").filter(".c3").click(function(){
	// 	$(this).css("color","green");
	// })
	// 使用组合选择，选中c3类的所有元素并使用eq方法选择c3类元素的第一个元素
	$("li").filter(".c3").eq(0).css("color","green");
	//使用not方法反向选择
	$("li").not(".c3").css("color","#757575");
	// 正则表达式练习
	var reg1 = /\d{6}/;
	var str1 = '331200';
	console.log(reg1.test(str1));
	var reg2 = /go+/;
	var str2 = 'god';
	console.log(reg2.test(str2));
})	