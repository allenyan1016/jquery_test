
$(function(){
	var app = new Vue({
		el: "#app",
		data: {
			message: "hello world!"
		}
	})
})
// 使用js原生加载事件等页面加载完成之后再加载相应的JS
// 如果不使用的话页面无法加载出来hello world
// window.onload=function(){
// 	var app = new Vue({
// 			el: "#app",
// 			data: {
// 				message: "hello world!"
// 			}
// 		})
// }