/**********************************************************
*	CORE CONTROLLER
***********************************************************/

var ctrl_core = {

	path : "",
	id 	 : "",
	loadedControllers : [],
	init : function(){	
		ctrl_core.routeListeners();

		$.mobile.changePage("#mainScreen")


	  		
	},
	loadController : function(controllerURL,params,reload){
		
		if(reload || ctrl_core.loadedControllers.indexOf(controllerURL)==-1){
			$.ajax({
	        type: "GET",
	        url: controllerURL,
	        dataType: "script",
	        error: function (XMLHttpRequest, textStatus, errorThrown) {
	            console.log(textStatus, errorThrown);
	        },
	        success:function(e){
	         	eval(params.init)(params);
	        }
    		});
		}else{
			eval(params.init)(params);
		}
		ctrl_core.loadedControllers.push(controllerURL)
		
	},
	routeListeners : function(){


		$(document).on("pagebeforeshow","#initialBlank", function() {
	       	
	    });

	
		$(document).on("pagebeforeshow","#mainScreen", function() {
	        var params = { init : 'ctrl_home.init' }
	    	ctrl_core.loadController("./js/controllers/ctrl_home.js",params);
	    });

	    $(document).on("pagebeforeshow","#list", function() {
	      	var params = { init : 'ctrl_list.init' }
	    	ctrl_core.loadController("./js/controllers/ctrl_list.js",params);
	    });

	    $(document).on("pagebeforeshow","#productoDet", function() {
	      	var params = { init : 'ctrl_productoDet.init' }
	    	ctrl_core.loadController("./js/controllers/ctrl_productosDet.js",params);
	    });

	    $(document).on("pagebeforeshow","#ayudaDet", function() {
	      	var params = { init : 'ctrl_ayudaDet.init' }
	    	ctrl_core.loadController("./js/controllers/ctrl_ayudaDet.js",params);
	    });

	    $(document).on("pagebeforeshow","#noticiaDet", function() {
	      	var params = { init : 'ctrl_noticiaDet.init' }
	    	ctrl_core.loadController("./js/controllers/ctrl_noticiaDet.js",params);
	    });

	    $(document).on("pagebeforeshow","#calculadora", function() {
	      	var params = { init : 'ctrl_calculadora.init' }
	    	ctrl_core.loadController("./js/controllers/ctrl_calculadora.js",params);
	    });



	    //----------------------------------------------------------------------------


	  
	}

}