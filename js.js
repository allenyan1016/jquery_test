
$(function(){
	var $html = '<img src="marks.jpg" title="marks" id="img1">';
	$html += '<div id="contro">控制</div>';
	$html += '<div id="list_test">列表</div>';
	$html += '<div class="c1">list1</div>';
	$html += '<div class="c1">list2</div>';
	$html += '<div class="c1">list3</div>';
	$html += '<img src="marks.jpg" title="marks" id="img2">';
	$html += '<div id="contro2">切换</div>';
	$("#zt").append($html);
	$("#contro").click(function(){
		$("#img1").fadeToggle(1000);
	})
	$("#contro2").click(function(){
		$("#img2").toggle(500);
	})
	$("#list_test").click(function(){
		$(".c1").slideToggle();
	})
})	