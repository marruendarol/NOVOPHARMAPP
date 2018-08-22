/**********************************************************
*	LIST CONTROLLER
***********************************************************/

distVis = false;
titleList = "Productos";
var spec = "";
var expInt;
var pacs = []
var currList = [];

var ctrl_list = {
	data : {},
	pageDiv : "#listProductoCont",
	init : function(data,template){
		pacs = [];
		ctrl_list.data = data;
		$(ctrl_list.pageDiv).empty();
		
		switch(paramsPage.type){
			case "productos" 	: titleList="Producto";distVis=false;ctrl_list.get_productos();break;
			case "ayuda" 		: titleList="Ayuda";distVis=true;ctrl_list.get_ayuda();break;
			case "noticias" 	: titleList="Noticias";distVis=true;ctrl_list.get_noticias();break;
		}
	//--------------------------------------------ZONA
	},
	get_productos : function(id){
		console.log('productos')
  		dbC.query('productos/read','POST', {}, ctrl_list.renderProductos);
	},
	//-----------------------------------------------------------
	renderProductos : function(result){

		jqm.hideLoader();		
		var datar = { 
				items  : result.data,
				distVis : distVis,
				empty 	: (result.data.length==0 ? true : false),
				img 		: "noimage.png",
			}

		ctrl_list.mainObj = template.render('#listProductos',ctrl_list.pageDiv,datar)

		$('.titleList').text(titleList)

		ctrl_list.mainObj.on('listDetail',function(event){
			mainC.clickAnim(event.node)
			paramsProd = { data : event.context }
			$.mobile.changePage( "#productoDet");
		});

		$(ctrl_list.pageDiv).trigger("create");
		//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		 myScroll = new IScroll('#wrapperList',{  
		 	click:true,
		 	useTransition:true,
		 	scrollbars:scrolls,
		 	mouseWheel:true,
		 	disablePointer: true, // important to disable the pointer events that causes the issues
			disableTouch: false, // false if you want the slider to be usable with touch devices
			disableMouse: false, // false if you want the slider to be usable with a mouse (desktop)
		 	interactiveScrollbars: true })

		 ctrl_list.mainObj.on('openLink',function(event){
				window.open(event.context.urlLink, '_system')
			});
	},

	get_ayuda : function(id){
  		dbC.query('ayudas/read','POST', {}, ctrl_list.renderAyudas);
	},
	//-----------------------------------------------------------
	renderAyudas : function(result){

		jqm.hideLoader();		
		var datar = { 
				items  : result.data,
				distVis : distVis,
				empty 	: (result.data.length==0 ? true : false),
				img 		: "noimage.png",
			}

		datar.serverURL = serverURL.slice(0, -1)

		ctrl_list.mainObj = template.render('#listAyuda',ctrl_list.pageDiv,datar)

		$('.titleList').text(titleList)

		ctrl_list.mainObj.on('listDetail',function(event){
			mainC.clickAnim(event.node)
			paramsProd = { data : event.context }
			$.mobile.changePage( "#ayudaDet");
		});

		$(ctrl_list.pageDiv).trigger("create");
		//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		 myScroll = new IScroll('#wrapperList',{  
		 	click:true,
		 	useTransition:true,
		 	scrollbars:scrolls,
		 	mouseWheel:true,
		 	disablePointer: true, // important to disable the pointer events that causes the issues
			disableTouch: false, // false if you want the slider to be usable with touch devices
			disableMouse: false, // false if you want the slider to be usable with a mouse (desktop)
		 	interactiveScrollbars: true })

		// ctrl_list.mainObj.on('openLink',function(event){
		//		window.open(event.context.urlLink, '_system')
		//	});


		 $( '.swipebox' ).swipebox();
	},


	get_noticias : function(id){
  		dbC.query('noticias/read','POST', {}, ctrl_list.renderNoticias);
	},
	//-----------------------------------------------------------
	renderNoticias : function(result){

		jqm.hideLoader();		
		var datar = { 
				items  : result.data,
				distVis : distVis,
				empty 	: (result.data.length==0 ? true : false),
				img 		: "noimage.png",
			}

		ctrl_list.mainObj = template.render('#listNoticias',ctrl_list.pageDiv,datar)

		$('.titleList').text(titleList)

		ctrl_list.mainObj.on('listDetail',function(event){
			mainC.clickAnim(event.node)
			paramsProd = { data : event.context }
			$.mobile.changePage( "#noticiaDet");
		});

		$(ctrl_list.pageDiv).trigger("create");
		//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		 myScroll = new IScroll('#wrapperList',{  
		 	click:true,
		 	useTransition:true,
		 	scrollbars:scrolls,
		 	mouseWheel:true,
		 	disablePointer: true, // important to disable the pointer events that causes the issues
			disableTouch: false, // false if you want the slider to be usable with touch devices
			disableMouse: false, // false if you want the slider to be usable with a mouse (desktop)
		 	interactiveScrollbars: true })

		 ctrl_list.mainObj.on('openLink',function(event){
				window.open(event.context.urlLink, '_system')
			});
	},
	
}