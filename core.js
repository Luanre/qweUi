(function(){
	var core = function(oOptions){
		var canvas = typeof oOptions.canvas === "string" ? document.getElementById(oOptions.canvas) : oOptions.canvas instanceof HTMLCanvasElement ? oOptions.canvas : null;
		if(canvas){
			this.ctx = canvas.getContext('2d');
		} else {
			throw new Error('Ambigous canvas element. Please, set `canvas` parameter to ID or instance of DOM element.');
		}
	}
	
	core.prototype.getContext = function(){
		return this.ctx;
	};
	
	var Widget = function(){};
	
	Widget.prototype.render = function(){
		throw new Error('Implement `render` method first.');
	}
	
	Widget.prototype.extend = function(){
		var F = new Function;
		F.prototype = Object.create(this.prototype);
		return F;
	}
	
	var TextView = Widget.extend();
	
	
	var VerticalLayout = Widget.extend();
	VerticalLayout.prototype.render = function(){
	
	}
	
})();
