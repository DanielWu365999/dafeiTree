# dafeiTree
# 初始化
  var options = {
		url:'./list.json', //列表接口
		skin:'#3c4b52' //主题颜色
	}
 var myTree = $('#myTree').dafeiTree(options);
# API
 获取勾选ids    myTree.getCheckIdStr()
 获取勾选数据    myTree.getCheckData()
