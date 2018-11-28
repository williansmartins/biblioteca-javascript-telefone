(function(){
	var blJs = function(arg){
		if(!(this instanceof blJs)){
			return new blJs(arg);
		}
		this.myArg = arg;
	}

	var spOptions = {
	    onKeyPress: function(val, e, field, options) {
	    	field.mask(SPMaskBehavior.apply({}, arguments), options);
	    }
	};

 	var SPMaskBehavior = function (val) {
		var total = val.replace(/\D/g, '').length;
	      
      	console.info("Total: " + total);      
	      
      	if(total === 11){
	      	console.info("aplicando mascara de 11");        
	        return '(00) 00000-0000';
      	}else{
	      
      		if(total === 10){
        		console.info("aplicando mascara == 10 ");
        		return '(00) 0000-0000000';
	        }else{
        		console.info("aplicando mascara de else ");
        		return '(00) 000-0000000';
	        }
      	}
  	}

	blJs.fn = blJs.prototype = {
		//Função que esconde elementos HTML com o Atributo display:none;.
		esconde: function(){
			document.querySelector(this.myArg).setAttribute('style','display:none');
			return this;
		},//Se separa com vírgula pois é um objeto
		//Função que remove o atributo style e todos os atributos contidos nela.
		reset: function(){
			document.querySelector(this.myArg).removeAttribute("style");
			return this;
		},
		aplicarMascara: function(){
			console.info(this.myArg);
			$(this.myArg).mask(SPMaskBehavior, spOptions);
			return this;
		}
	}
	window.blJs = blJs,window.$ = blJs;
})();