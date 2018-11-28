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
		aplicarMascara: function(){
			$(this.myArg).mask(SPMaskBehavior, spOptions);
			return this;
		}
	}
	window.myLib = myLib,window.$ = myLib;
})();