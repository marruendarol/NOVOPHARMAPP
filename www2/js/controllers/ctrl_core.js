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
	    	console.log("invocando list")
	      	var params = { init : 'ctrl_list.init' }
	    	ctrl_core.loadController("./js/controllers/ctrl_list.js",params);
	    });



	    // Expedientes -----------------------------------------------------------------

	     $(document).on("pagebeforeshow","#listDesc", function() {
	      	var params = { init : 'ctrl_listDesc.init' }
	    	ctrl_core.loadController("./js/controllers/ctrl_listDesc.js",params);
	    });

	     $(document).on("pagebeforeshow","#expedientSec", function() {
	      	var params = { init : 'ctrl_expedienteSec.init' }
	    	ctrl_core.loadController("./js/controllers/ctrl_expedienteSec.js",params);
	    });

	    $(document).on("pagebeforeshow","#personalesView", function() {
	      	var params = { init : 'ctrl_personales.init' }
	    	ctrl_core.loadController("./js/controllers/ctrl_personales.js",params);
	    });

	    $(document).on("pagebeforeshow","#antecedentesView", function() {
	      	var params = { init : 'ctrl_antecedentes.init' }
	    	ctrl_core.loadController("./js/controllers/ctrl_antecedentes.js",params);
	    });

	    $(document).on("pagebeforeshow","#estudiosView", function() {
	      	var params = { init : 'ctrl_estudios.init' }
	    	ctrl_core.loadController("./js/controllers/ctrl_estudios.js",params);
	    });

	    $(document).on("pagebeforeshow","#historicoView", function() {
	      	var params = { init : 'ctrl_historico.init' }
	    	ctrl_core.loadController("./js/controllers/ctrl_historico.js",params);
	    });


	    $(document).on("pagebeforeshow","#listNotas", function() {
	      	var params = { init : 'ctrl_listNotas.init' }
	    	ctrl_core.loadController("./js/controllers/ctrl_listNotas.js",params);
	    });

	    $(document).on("pagebeforeshow","#notaDet", function() {
	      	var params = { init : 'ctrl_notaDet.init' }
	    	ctrl_core.loadController("./js/controllers/ctrl_notaDet.js",params);
	    });

	    //----------------------------------------------------------------------------


	    $(document).on("pagebeforeshow","#mapa", function() {
	      	var params = { init : 'ctrl_mapa.init' }
	    	ctrl_core.loadController("./js/controllers/ctrl_mapa.js",params);
	    });

	    $(document).on("pagebeforeshow","#infoSuc", function() {
	      	var params = { init : 'ctrl_info.init' }
	    	ctrl_core.loadController("./js/controllers/ctrl_info.js",params);
	    });

	    $(document).on("pagebeforeshow","#contacto", function() {
	      	var params = { init : 'ctrl_contacto.init' }
	    	ctrl_core.loadController("./js/controllers/ctrl_contacto.js",params);
	    });

	  
	}

}