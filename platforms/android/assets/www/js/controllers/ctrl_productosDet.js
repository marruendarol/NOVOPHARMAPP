/**********************************************************
*	LIST CONTROLLER
***********************************************************/

var ctrl_productoDet = {
	data : {},
	pageDiv : "#productoDetP",

	init : function(data,template){

		ctrl_productoDet.data = data;
		ctrl_productoDet.render();
	},
	render : function(){

		var data  = paramsProd.data;
		data.serverURL = serverURL.slice(0, -1)
		data.secc = 1;
		//var info = data.info;

		console.log(data,"data sd")

		var mainObj = template.render('#productoDetT',ctrl_productoDet.pageDiv,data)

		$('.titleList').text(data.nombre)

		mainObj.on('sec1', function(e){
			mainObj.set('secc',1);
			$(ctrl_productoDet.pageDiv).trigger("create");
			setTimeout(function(){ myScroll.refresh() }, 500);
			

		});

		mainObj.on('sec2', function(e){
			mainObj.set('secc',2);
			$(ctrl_productoDet.pageDiv).trigger("create");
			setTimeout(function(){ myScroll.refresh() }, 500);
			
		});

		mainObj.on('sec3', function(e){
			mainObj.set('secc',3);
			$(ctrl_productoDet.pageDiv).trigger("create");
			setTimeout(function(){ myScroll.refresh() }, 500);
		});

		$(ctrl_productoDet.pageDiv).trigger("create");

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
