$(function(){
	var options = {
		url:'./list.json',
		skin:'#3c4b52'
	}
	var myTree = $('#myTree').dafeiTree(options);
	$('#getCheckIds').click(function(){
		$('div.logs').html('获取ids:<br/>'+myTree.getCheckIdStr());
	})
	$('#getCheckData').click(function(){
		$('div.logs').html('获取数据:<br/>'+myTree.getCheckData());
	})
})