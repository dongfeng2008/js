

var urls =[];
$('.dir-handler').each(function(){
		var url = $(this).attr('href');
		urls.push(url);
});
if(urls.lenght!=0){
	urls.length =5;
}
var timeout = false; //启动及关闭按钮
function time()
{
  if(timeout) return;
  if(urls.length !=0){
  	var url = urls.pop();
  	console.log('open : '+url);
  	window.open(url);
  }else{
  	timeout = false;
  }
  setTimeout(time,10000); //time是指本身,延时递归调用自己,100为间隔调用时间,单位毫秒
}

time();


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
