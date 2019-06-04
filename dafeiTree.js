(function($){ 
	$.fn.dafeiTree = function(options){
		function tree(options){
			this.url = options.url || '';  //列表接口
			this.treeId = options.treeId || 'myTree';  //树id，默认id为myTree
			this.skin = options.skin || '#3c4b52';    //设置字体颜色
			this.init();
			this.initEvents();
		}
		var fn = tree.prototype;
		fn.init = function(){
			var data = {
				"list": [{
					"id": "1101EEB2AE28455AAD38A8ADA536A08D",
					"name": "珠海网",
					"children":[
						{
						"id": "BFAFA10DDAC24459AC46872835EF431C",
						"name": "珠海新闻",
						"pid": "1101EEB2AE28455AAD38A8ADA536A08D",
						"children":[{
							"id": "BFAFA10DDAC24459AC46872835EF431C",
							"name": "珠海新也有",
							"pid": "1101EEB2AE28455AAD38A8ADA536A08D"
						}]
						}, {
						"id": "9FAAF68F47B0463E891D3D906D39C1FD",
						"name": "先锋951",
						"pid": "1101EEB2AE28455AAD38A8ADA536A08D"
						}, {
						"id": "A1E533409C0943BC93C8E027B917C11A",
						"name": "珠海电台活力915",
						"pid": "1101EEB2AE28455AAD38A8ADA536A08D"
						}
					]
				},{
					"id": "2201EEB2AE28455AAD38A8ADA536A08D",
					"name": "北京网",
					"children":[
						{
						"id": "1FAFA10DDAC24459AC46872835EF431C",
						"name": "北京网新闻",
						"pid": "2201EEB2AE28455AAD38A8ADA536A08D"
						}, {
						"id": "0FAAF68F47B0463E891D3D906D39C1FD",
						"name": "北京网951",
						"pid": "2201EEB2AE28455AAD38A8ADA536A08D"
						}, {
						"id": "M1E533409C0943BC93C8E027B917C11A",
						"name": "北京网活力915",
						"pid": "2201EEB2AE28455AAD38A8ADA536A08D"
						}
					]
				}],
				"status": 200,
				"msg": "查询成功"
			}
			/*$.ajax({
				url:this.url,
				type:'post',
				dataType:'json',
				success:function(res){
					this.renderTreeData(res.list);
				}
			})*/
			this.renderTreeData(data.list);
			$('#'+ this.treeId).css('color',this.skin);
		}
		fn.renderTreeData = function(data){
			var that = this;
			var checkAllStr = '<div class="checkAll-contanier"><input type="checkbox" name="checkAll" ><span>全选</span></div>';
			var str = '',tpl = '<ul class="root-child"><li id="{id}">\
							<input type="hidden" name="data" value='+JSON.stringify(data)+'>\
							<input type="checkbox" name="checkOne" value='+JSON.stringify(data)+'/>\
							<span>{name}</span>\
						</li>\
					</ul> ';
			$.each(data,function(index,value){
				if(value.children.length > 0){
					$('#'+ that.treeId).append(that.renderColumnData(value));
				}else{
					str += tpl.replace('{name}',value.name)
								.replace('{id}',value.id)
					$('#'+ that.treeId).append(str);
				}
			})
			$('#'+ that.treeId).prepend(checkAllStr);
		}
		fn.renderColumnData = function(data){  //获取一列数据
			var that = this;
			//var saveData = data;
			//delete saveData.children; //孩子不保存
			var columnStart = '<ul class="root-child"><li id="'+data.id+'">\
					<input type="hidden" name="data" value='+JSON.stringify(data)+'><input type="checkbox" name="checkOne"/>\
					<span>'+data.name+'</span>';
			var columnDataStr = that.recursive(data); //递归遍历树
			return columnStart + columnDataStr + '</li></ul>';
		}
		fn.recursive = function(data){
			var that = this;
			var beginStr = '<ul>', oneDataStr = '';
			var tpl = '<li id="{id}"><input type="hidden" name="data" value=\{data}><input type="checkbox" name="checkOne" /><span>{name}</span>';
			$.each(data.children,function(index,value){
				oneDataStr += tpl.replace('{id}',value.id)
						  .replace('{name}',value.name)
						  .replace('{data}',JSON.stringify(value))
				if(value.children && value.children.length > 0){
					oneDataStr += that.recursive(value);
				}
			})
			return beginStr += oneDataStr + '</ul></li></ul>';
		}
		fn.initEvents = function(){
			var that = this;
			//全选
			$('#' + this.treeId).delegate('input[name="checkAll"]','click',function(){
				if($(this).prop('checked')){
					$('#' + that.treeId +' input[name="checkOne"]').each(function(index){
						$(this).prop('checked',true);
					})
					$(this).next('span').text('全不选');
					$('#' + that.treeId).find('input').prop('checked',true);
				}else{
					$(this).next('span').text('全选');
					$('#' + that.treeId).find('input').prop('checked',false);
				}
			})
			//勾选
			$('#' + this.treeId).delegate('input[name="checkOne"]','click',function(){
				var _this = $(this);
				if(_this.prop('checked')){
					_this.parent('li').find('input[name="checkOne"]').each(function(index){
						$(this).prop('checked',true);
					})
					_this.children('input[name="checkOne"]').prop('checked',true);
				}else{
					_this.parent('li').find('input[name="checkOne"]').each(function(index){
						$(this).prop('checked',false);
					})
				}
				
				that.setParentIsCheck(_this);
			})
			
		}
		fn.setParentIsCheck = function(_this){
			if(_this.length == 0){
				return false
			}
			var targetNode = _this.parent('li').parent('ul');
			if((targetNode.find('input[name="checkOne"]:checked').length) == targetNode.find('li').length){
				targetNode.siblings('input[name="checkOne"]').prop('checked',true);
			}else{
				targetNode.siblings('input[name="checkOne"]').prop('checked',false);
			}
			this.setParentIsCheck(targetNode);
		}
		fn.getCheckIdStr = function(){
			var arr = [];
			$('#' + this.treeId +' input[name="checkOne"]').each(function(index){
				if($(this).prop('checked')){
					arr.push($(this).parents('li').attr('id'))
				}
			})
			return arr.join(',');
		}
		fn.getCheckData = function(){
			var arr = [];
			$('#' + this.treeId +' input[name="checkOne"]').each(function(index){
				if($(this).prop('checked')){
					arr.push(($(this).prev('input[name="data"]').val()));
				}
			})
			return arr.join(',');
		}
		var obj = new tree(options);
		return obj
	}
})(jQuery);
