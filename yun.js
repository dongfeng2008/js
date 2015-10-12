console.log("保存文件");
		console.log(window.yunData);
    var sharePath = "["+"\""+window.yunData.PATH+"\""+"]";
	var shareId = window.yunData.SHARE_ID;
	url = 'http://yun.baidu.com/share/transfer?shareid='+shareId+'&from=2958108051&ondup=newcopy&async=1';
	console.log(url);
	console.log(sharePath);
	$.post(
		url,
		{
			filelist:sharePath,
			path:'/fafa'
		}
	);
