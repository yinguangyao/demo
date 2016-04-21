window.onload=function(){
	//跨浏览器事件
		var eventHandler=function(ele,type,handler){
			if(ele.addEventListener){
				ele.addEventListener(type,handler);
			}else if(ele.attachEvent){
				ele.attachEvent("on"+type,handler);
			}else{
				ele["on"+type]=handler;
			}
		};
		var r=document.getElementsByClassName("first")[0];
			var pre=document.getElementById("pre");
			var mid=document.getElementById("mid");
			var post=document.getElementById("post");
			var divs=document.getElementsByTagName("div");
			var nodes=[];//定义数组用来保存node节点
			//遍历动画效果实现
			var show=function(){
				var i=0;
				for(var j=0;j<nodes.length;j++){
						nodes[j].style.backgroundColor="white";
					}
				nodes[i].style.backgroundColor = 'green';
				var a=setInterval(function(){
					i++;
					
					if(i<nodes.length){
					    nodes[i-1].style.backgroundColor="white";
						nodes[i].style.backgroundColor="green";
					}else{
						clearInterval(a);
					}
				},1000);
			};
			//先序遍历实现
			var preOrder=function(root){
				if(!(root==null)){
				nodes.push(root);
				preOrder(root.firstElementChild);
				preOrder(root.lastElementChild);
				}
			};
			//中序遍历实现
			var midOrder=function(root){
				if(!(root==null)){
				midOrder(root.firstElementChild);
				nodes.push(root);;
				midOrder(root.lastElementChild);
				}
			};
			//后序遍历实现
			var postOrder=function(root){
				if(!(root==null)){
				postOrder(root.firstElementChild);
				midOrder(root.lastElementChild);
				nodes.push(root);
				}
			};
			//按钮点击事件
		eventHandler(pre,"click",function(){
			nodes=[];
			preOrder(r);
			show();
		});
		eventHandler(mid,"click",function(){
			nodes=[];
			midOrder(r);
			show();
		});
		eventHandler(post,"click",function(){
			nodes=[];
			postOrder(r);
			show();
		});
		
		};