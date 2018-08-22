/**********************************************************
*	LIST CONTROLLER
***********************************************************/

var ctrl_noticiaDet = {
	data : {},
	pageDiv : "#noticiaDetP",

	init : function(data,template){

		ctrl_noticiaDet.data = data;
		ctrl_noticiaDet.render();
	},
	render : function(){

		var data  = paramsProd.data;
		data.serverURL = serverURL.slice(0, -1)
		//var info = data.info;

		console.log(data,"data sd")

		var mainObj = template.render('#noticiaDetT',ctrl_noticiaDet.pageDiv,data)

		$(ctrl_noticiaDet.pageDiv).trigger("create");

		//$("#table_notaDet tr:odd").css('background-color', 'rgb(223, 223, 223)'); 

		var  myScroll = new IScroll('#wrapperInfo',{  
		 	click:true,scrollbars:scrolls,mouseWheel:true,
		 		disablePointer: true, // important to disable the pointer events that causes the issues
				disableTouch: false, // false if you want the slider to be usable with touch devices
				disableMouse: false, // false if you want the slider to be usable with a mouse (desktop)
		 	interactiveScrollbars: true })

		setTimeout(function(){ myScroll.refresh() }, 500);


		mainObj.on('openURL',function(e,url){
			window.open(url, '_system')
		})
		
	
	}
}
