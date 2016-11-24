
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
		$("#img3").animate({"width":"100px"},1000).animate({"height":"100px"},1000).css(
			"border","5px soild red").fadeToggle(500);
	})
})	