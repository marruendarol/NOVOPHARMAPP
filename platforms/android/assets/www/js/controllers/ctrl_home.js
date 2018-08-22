/**********************************************************
*	MAIN SCREEN CONTROLLER
***********************************************************/
descVar = ""

var ctrl_home = {
	data : {},
	pageDiv : "#mainScreen",
	init : function(data,template){
		ctrl_home.data = data;
		ctrl_home.render();
	},
	render : function(){

		$(ctrl_home.pageDiv).empty();

		ctrl_home.data  = {
			userData : {
				nombre 		: window.localStorage.getItem("nombre"),
			},
			img 		: "noimage.png",
		}

		ctrl_home.mainObj = template.render('#mainT',ctrl_home.pageDiv,ctrl_home.data,null,{menuT : $('#menuT').html()})			

		$(ctrl_home.pageDiv).trigger("create");
		
		ctrl_home.mainObj.on('getProductos',function(event){
			mainC.clickAnim(event.node)
			paramsPage = { id : event.context._id, type: "productos" }
			$.mobile.changePage("#list");
		})

		ctrl_home.mainObj.on('getCalculadora',function(event){
			mainC.clickAnim(event.node)
			localStorage.clear();
			$.mobile.changePage("#calculadora");
		});

		ctrl_home.mainObj.on('getAyuda',function(event){
			
			mainC.clickAnim(event.node)
			paramsPage = { id : event.context._id, type: "ayuda" }
			$.mobile.changePage("#list");
		})

		ctrl_home.mainObj.on('getNoticias',function(event){
			paramsPage = { id : event.context._id, type: "noticias" }
			$.mobile.changePage("#list");
		});

		

		ctrl_home.mainObj.on('getCliomedic',function(event){
			window.open('https://cliomedic.com/', '_system')
		});


	}
}

