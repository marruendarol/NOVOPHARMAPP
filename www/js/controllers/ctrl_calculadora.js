/**********************************************************
*	LIST CONTROLLER
***********************************************************/

var ctrl_calculadora = {
	data : {},
	pageDiv : "#calculadoraP",

	init : function(data,template){

		ctrl_calculadora.data = data;
		ctrl_calculadora.render();
	},
	render : function(){

		var mainObj = template.render('#calculadoraT',ctrl_calculadora.pageDiv,{})

		$(ctrl_calculadora.pageDiv).trigger("create");

		$('.titleList').text("Calculadora")


		$('#calc').submit(function() {
  return false;
});
	
	}
}





function calcEqui(obj) {

   function IsNum(str) {
      for (var i = 0; i < str.length; i++) {
         var chr = str.substring(i, i+1);
         if ((chr < "0" || "9" < chr) && chr != ".")
            return false; 
      }
      if (eval(str)==0)
         return false;
      return true;
   }

   if (obj.mg.value<0.5) {
      alert("!! Valor Mg. debe de ser > 0.5!!");
      return; }
   if (!IsNum(obj.corti1.selectedIndex)) {
      alert("!! Selecciona corticoide 1!!");
      return; }
         if (!IsNum(obj.corti2.selectedIndex)) {
      alert("!!  Selecciona corticoide 2!!");
      return; }
      
   var mg    = obj.mg.value;
   var i      = obj.corti1.selectedIndex;
   var corti1   = obj.corti1.options[i].value;
   var ii =  obj.corti2.selectedIndex;
   var corti2 = obj.corti2.options[ii].value;
   var Factor   = 0;
   var Factor1   = 0
  


   Factor = parseFloat(corti1);
   Factor1 =parseFloat(corti2);
   // Calculation
   // Male

   Equiv1  =(mg/Factor)*10/10;
   Equiv= (Equiv1*Factor1)*10/10;

   $('#BeeValue').text(Math.round(Equiv*100)/100)
   
   
   if (obj.corti2.options[ii].value==1) {
     divResultado.innerHTML="  Potencia Mineralcorticoide<b> 1 </b> "
        divResultado0.innerHTML="Potencia Glucocorticoide<b> 1 </b> "
      divResultado1.innerHTML="Supresión Eje HH<b> 20-32 mg</b> "}
        if (obj.corti2.options[ii].value==1.25)  {
     divResultado.innerHTML="  Potencia Mineralcorticoide <b>0.8 </b> "
       divResultado0.innerHTML="Potencia Glucocorticoide<b> 0.8 </b> "
      divResultado1.innerHTML="Supresión Eje HH<b> 20-32 mg</b> "}
              if (obj.corti2.options[ii].value==0.25)  {
     divResultado.innerHTML="  Potencia Mineralcorticoide <b>0.8 </b> "
       divResultado0.innerHTML="Potencia Glucocorticoide<b> 4 </b> "
      divResultado1.innerHTML="Supresión Eje HH<b> 7.5</b> "}
      
        if (obj.corti2.options[ii].value==0.2) {
     divResultado.innerHTML="  Potencia Mineralcorticoide <b>0.5 </b> "
           divResultado0.innerHTML="Potencia Glucocorticoide<b> 5 </b> "
      divResultado1.innerHTML="Supresión Eje HH<b> 6 mg</b>"
     }
            if (obj.corti2.options[ii].value==0.3) {
     divResultado.innerHTML="  Potencia Mineralcorticoide <b>0.5 </b> "
           divResultado0.innerHTML="Potencia Glucocorticoide<b> 4 </b> "
      divResultado1.innerHTML="Supresión Eje HH<b> 9 mg</b>"
     }
           if (obj.corti2.options[ii].value ==0.2001||obj.corti2.options[ii].value==0.1001||obj.corti2.options[ii].value ==0.04||obj.corti2.options[ii].value==0.03) {
     divResultado.innerHTML="  Potencia Mineralcorticoide <b>0</b> "
      }
     
               if (obj.corti2.options[ii].value ==0.2001) {
     divResultado0.innerHTML="Potencia Glucocorticoide<b> 5 </b>  "
     divResultado1.innerHTML="Supresión Eje HH<b> 6 mg</b>"
     
        }            if (obj.corti2.options[ii].value ==0.1001) {
     divResultado0.innerHTML="Potencia Glucocorticoide<b> 10</b>  "
     divResultado1.innerHTML="Supresión Eje HH<b> 2 mg</b>"
     
      }
          if (obj.corti2.options[ii].value ==0.03) {
     divResultado0.innerHTML="Potencia Glucocorticoide<b> 25-30</b>  "
     divResultado1.innerHTML="Supresión Eje HH<b> 1 mg</b>"
     
      }
            if (obj.corti2.options[ii].value ==0.04) {
     divResultado0.innerHTML="Potencia Glucocorticoide<b> 25</b>  "
     divResultado1.innerHTML="Supresión Eje HH<b> 1 mg</b>"
     
      }

     
      if (obj.corti2.options[ii].value==0.1) {
     divResultado.innerHTML="Potencia Mineralcorticoide<b> 125 </b> "
      divResultado0.innerHTML="Potencia Glucocorticoide<b> 10 </b> "
      divResultado1.innerHTML="Supresión Eje HH<b> 2.5 mg</b> "}



   
}

