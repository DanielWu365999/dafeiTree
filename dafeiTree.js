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
				"list": [
            {
                "id": 62,
                "systemId": 24,
                "pid": 0,
                "name": "开发助手",
                "url": "#",
                "target": null,
                "orders": 2,
                "version": 0,
                "icon": null,
                "children": [
                    {
                        "id": 79,
                        "systemId": 24,
                        "pid": 62,
                        "name": "日志查看",
                        "icon": null,
                        "url": "/logView/index",
                        "target": null,
                        "orders": 1,
                        "addTime": "2019-06-04T02:05:18.000+0000",
                        "updateTime": "2019-06-04T02:05:18.000+0000",
                        "version": 0,
                        "children": []
                    },
                    {
                        "id": 80,
                        "systemId": 24,
                        "pid": 62,
                        "name": "日志面板",
                        "icon": null,
                        "url": "/logPanel/index",
                        "target": null,
                        "orders": 2,
                        "addTime": "2019-06-04T02:05:34.000+0000",
                        "updateTime": "2019-06-04T02:05:34.000+0000",
                        "version": 0,
                        "children": []
                    },
                    {
                        "id": 81,
                        "systemId": 24,
                        "pid": 62,
                        "name": "错误分析",
                        "icon": null,
                        "url": "/page/dev_assistant/dev_assistant_1.jsp",
                        "target": null,
                        "orders": 3,
                        "addTime": "2019-06-04T02:05:59.000+0000",
                        "updateTime": "2019-06-04T02:05:59.000+0000",
                        "version": 0,
                        "children": []
                    },
                    {
                        "id": 82,
                        "systemId": 24,
                        "pid": 62,
                        "name": "错误列表",
                        "icon": null,
                        "url": "/page/dev_assistant/dev_assistant_2.jsp",
                        "target": null,
                        "orders": 4,
                        "addTime": "2019-06-04T02:06:22.000+0000",
                        "updateTime": "2019-06-04T02:06:22.000+0000",
                        "version": 0,
                        "children": []
                    },
                    {
                        "id": 83,
                        "systemId": 24,
                        "pid": 62,
                        "name": "接入文档",
                        "icon": null,
                        "url": "/common/index?jspPath=/wikitem/wikiTem",
                        "target": null,
                        "orders": 5,
                        "addTime": "2019-06-04T02:06:53.000+0000",
                        "updateTime": "2019-06-04T02:06:53.000+0000",
                        "version": 0,
                        "children": []
                    }
                ]
            },
            {
                "id": 61,
                "systemId": 24,
                "pid": 0,
                "name": "数据分析",
                "url": "#",
                "target": null,
                "orders": 1,
                "version": 1,
                "icon": null,
                "children": [
                    {
                        "id": 63,
                        "systemId": 24,
                        "pid": 61,
                        "name": "数据概览",
                        "icon": null,
                        "url": "#",
                        "target": null,
                        "orders": 1,
                        "addTime": "2019-06-04T01:54:25.000+0000",
                        "updateTime": "2019-06-04T01:54:25.000+0000",
                        "version": 0,
                        "children": [
                            {
                                "id": 66,
                                "systemId": 24,
                                "pid": 63,
                                "name": "游戏概览",
                                "icon": null,
                                "url": "/gameOverView/index_new",
                                "target": null,
                                "orders": 1,
                                "addTime": "2019-06-04T01:55:53.000+0000",
                                "updateTime": "2019-06-04T01:55:53.000+0000",
                                "version": 0,
                                "children": []
                            },
                            {
                                "id": 67,
                                "systemId": 24,
                                "pid": 63,
                                "name": "日报",
                                "icon": null,
                                "url": "/dailydata/index",
                                "target": null,
                                "orders": 2,
                                "addTime": "2019-06-04T01:56:23.000+0000",
                                "updateTime": "2019-06-04T01:56:23.000+0000",
                                "version": 0,
                                "children": []
                            },
                            {
                                "id": 68,
                                "systemId": 24,
                                "pid": 63,
                                "name": "周报",
                                "icon": null,
                                "url": "/weekly/view",
                                "target": null,
                                "orders": 3,
                                "addTime": "2019-06-04T01:56:52.000+0000",
                                "updateTime": "2019-06-04T01:56:52.000+0000",
                                "version": 0,
                                "children": []
                            },
                            {
                                "id": 69,
                                "systemId": 24,
                                "pid": 63,
                                "name": "月报",
                                "icon": null,
                                "url": "/monthly/index",
                                "target": null,
                                "orders": 4,
                                "addTime": "2019-06-04T01:57:09.000+0000",
                                "updateTime": "2019-06-04T01:57:09.000+0000",
                                "version": 0,
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": 64,
                        "systemId": 24,
                        "pid": 61,
                        "name": "实时数据",
                        "icon": null,
                        "url": "#",
                        "target": null,
                        "orders": 2,
                        "addTime": "2019-06-04T01:54:49.000+0000",
                        "updateTime": "2019-06-04T01:54:49.000+0000",
                        "version": 0,
                        "children": [
                            {
                                "id": 70,
                                "systemId": 24,
                                "pid": 64,
                                "name": "实时数据",
                                "icon": null,
                                "url": "/realTime/view/v1",
                                "target": null,
                                "orders": 1,
                                "addTime": "2019-06-04T01:57:53.000+0000",
                                "updateTime": "2019-06-04T01:57:53.000+0000",
                                "version": 0,
                                "children": []
                            },
                            {
                                "id": 71,
                                "systemId": 24,
                                "pid": 64,
                                "name": "实时留存",
                                "icon": null,
                                "url": "/common/index?jspPath=/apply_analysis/data_overview/realtimeKeep",
                                "target": null,
                                "orders": 2,
                                "addTime": "2019-06-04T01:58:43.000+0000",
                                "updateTime": "2019-06-04T01:58:43.000+0000",
                                "version": 0,
                                "children": []
                            },
                            {
                                "id": 72,
                                "systemId": 24,
                                "pid": 64,
                                "name": "实时分渠道分区服",
                                "icon": null,
                                "url": "/common/index?jspPath=/apply_analysis/data_overview/realtimeChannel",
                                "target": null,
                                "orders": 3,
                                "addTime": "2019-06-04T01:59:22.000+0000",
                                "updateTime": "2019-06-04T01:59:22.000+0000",
                                "version": 0,
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": 65,
                        "systemId": 24,
                        "pid": 61,
                        "name": "游戏玩家",
                        "icon": null,
                        "url": "#",
                        "target": null,
                        "orders": 3,
                        "addTime": "2019-06-04T01:55:07.000+0000",
                        "updateTime": "2019-06-04T01:55:07.000+0000",
                        "version": 0,
                        "children": [
                            {
                                "id": 73,
                                "systemId": 24,
                                "pid": 65,
                                "name": "新增玩家",
                                "icon": null,
                                "url": "/newPlayer/index",
                                "target": null,
                                "orders": 1,
                                "addTime": "2019-06-04T02:00:24.000+0000",
                                "updateTime": "2019-06-04T02:00:24.000+0000",
                                "version": 0,
                                "children": []
                            },
                            {
                                "id": 74,
                                "systemId": 24,
                                "pid": 65,
                                "name": "活跃玩家",
                                "icon": null,
                                "url": "/actPlayer/index",
                                "target": null,
                                "orders": 2,
                                "addTime": "2019-06-04T02:00:45.000+0000",
                                "updateTime": "2019-06-04T02:00:45.000+0000",
                                "version": 0,
                                "children": []
                            },
                            {
                                "id": 75,
                                "systemId": 24,
                                "pid": 65,
                                "name": "玩家留存",
                                "icon": null,
                                "url": "/playerRemain/index",
                                "target": null,
                                "orders": 3,
                                "addTime": "2019-06-04T02:01:07.000+0000",
                                "updateTime": "2019-06-04T02:01:07.000+0000",
                                "version": 0,
                                "children": []
                            },
                            {
                                "id": 76,
                                "systemId": 24,
                                "pid": 65,
                                "name": "付费转化",
                                "icon": null,
                                "url": "/common/index?jspPath=/apply_analysis/gamer/pay_conversion",
                                "target": null,
                                "orders": 4,
                                "addTime": "2019-06-04T02:01:38.000+0000",
                                "updateTime": "2019-06-04T02:01:38.000+0000",
                                "version": 0,
                                "children": []
                            },
                            {
                                "id": 77,
                                "systemId": 24,
                                "pid": 65,
                                "name": "玩家流失",
                                "icon": null,
                                "url": "/userLost/index",
                                "target": null,
                                "orders": 5,
                                "addTime": "2019-06-04T02:02:02.000+0000",
                                "updateTime": "2019-06-04T02:02:02.000+0000",
                                "version": 0,
                                "children": []
                            },
                            {
                                "id": 78,
                                "systemId": 24,
                                "pid": 65,
                                "name": "设备相关",
                                "icon": null,
                                "url": "/device/index",
                                "target": null,
                                "orders": 6,
                                "addTime": "2019-06-04T02:02:24.000+0000",
                                "updateTime": "2019-06-04T02:02:24.000+0000",
                                "version": 0,
                                "children": []
                            }
                        ]
                    }
                ]
            }
        ],
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
			fn.renderExpandArrow();   //加折叠箭头
			fn.arrowClickEvents();   //箭头点击事件
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
			if(data.children.length > 0){
				$.each(data.children,function(index,value){
					beginStr += '<li id='+value.id+'>';
					beginStr += '<input type="hidden" name="data" value='+JSON.stringify(value)+'>';
					beginStr += '<input type="checkbox" name="checkOne"/>';
					beginStr += '<span>'+value.name+'</span>'
					beginStr += that.recursive(value);
					beginStr += '</li>';
				})
			}
			return beginStr += '</ul>';
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
			var targetNode = _this.parent('li').parent('ul').siblings('input[name="checkOne"]');
			if(_this.prop('checked')){
				targetNode.prop('checked',true);
			}else if(_this.parent('li').siblings('li').find('input[name="checkOne"]').prop('checked') == false){
				targetNode.prop('checked',false);
			}
			/*if((targetNode.find('input[name="checkOne"]:checked').length) == targetNode.find('li').length){
				targetNode.siblings('input[name="checkOne"]').prop('checked',true);
			}else{
				targetNode.siblings('input[name="checkOne"]').prop('checked',false);
			}*/
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
		fn.renderExpandArrow = function(){
			$('#myTree li').each(function(index){
				if($(this).find('ul li').length > 0){
					$(this).prepend('<span class="tree_icon expand"></span>')
				}
			})
		}
		fn.arrowClickEvents =function(){
			$('#myTree').delegate('span.tree_icon','click',function(){
				if($(this).hasClass('expand')){
					$(this).siblings('ul').slideUp();
					$(this).removeClass('expand');
				}else{
					$(this).siblings('ul').slideDown();
					$(this).addClass('expand');
				}
			})
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
