/**********************************************************
*	LIST CONTROLLER
***********************************************************/

var ctrl_notaDet = {
	data : {},
	pageDiv : "#notaDetP",

	init : function(data,template){

		console.log(data,"Detalle de Nota de evolución")
		ctrl_notaDet.data = data;
		ctrl_notaDet.render();
	},
	render : function(){

		var data  = paramsNota.data;
		//var info = data.info;

		console.log(data,"data sd")

		var mainObj = template.render('#notaDetT',ctrl_notaDet.pageDiv,data)

		$(ctrl_notaDet.pageDiv).trigger("create");

		$("#table_notaDet tr:odd").css('background-color', 'rgb(223, 223, 223)'); 

		var  myScroll = new IScroll('#wrapperInfo',{  
		 	click:true,scrollbars:scrolls,mouseWheel:true,
		 		disablePointer: true, // important to disable the pointer events that causes the issues
				disableTouch: false, // false if you want the slider to be usable with touch devices
				disableMouse: false, // false if you want the slider to be usable with a mouse (desktop)
		 	interactiveScrollbars: true })

		setTimeout(function(){ myScroll.refresh() }, 500);
		
	
	}
}
