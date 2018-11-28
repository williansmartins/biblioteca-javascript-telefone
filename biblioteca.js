(function(){
	var myLib = function(arg){
		if(!(this instanceof myLib)){
			return new myLib(arg);
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
	      
      	if(total === 11){
	        return '(00) 00000-0000';
      	}else{
      		if(total === 10){
        		return '(00) 0000-0000000';
	        }else{
        		return '(00) 000-0000000';
	        }
      	}
  	}

	myLib.fn = myLib.prototype = {
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
			$(this.myArg).mask(SPMaskBehavior, spOptions);
			return this;
		}
	}
	window.myLib = myLib,window.$ = myLib;
})();