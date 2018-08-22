/**********************************************************
*	LIST CONTROLLER
***********************************************************/

var ctrl_ayudaDet = {
	data : {},
	pageDiv : "#ayudaDetP",

	init : function(data,template){

		ctrl_ayudaDet.data = data;
		ctrl_ayudaDet.render();
	},
	render : function(){

		var data  = paramsProd.data;
		data.serverURL = serverURL.slice(0, -1)
		//var info = data.info;

		console.log(data,"data sd")

		var mainObj = template.render('#ayudaDetT',ctrl_ayudaDet.pageDiv,data)

		$(ctrl_ayudaDet.pageDiv).trigger("create");

		//$("#table_notaDet tr:odd").css('background-color', 'rgb(223, 223, 223)'); 

		var  myScroll = new IScroll('#wrapperInfo',{  
		 	click:true,scrollbars:scrolls,mouseWheel:true,
		 		disablePointer: true, // important to disable the pointer events that causes the issues
				disableTouch: false, // false if you want the slider to be usable with touch devices
				disableMouse: false, // false if you want the slider to be usable with a mouse (desktop)
		 	interactiveScrollbars: true })

		setTimeout(function(){ myScroll.refresh() }, 500);
		
		
	
	}
}
