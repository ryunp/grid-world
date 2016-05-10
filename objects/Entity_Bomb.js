(function(root) {
	
	var count = 0,
		MAX_RADIUS = 4;


	function Entity_Bomb(radius) {
		
		Entity.call(this);
		count++;

		this.radius = (radius > 0 && radius <= MAX_RADIUS) ?  radius :
			Math.floor(Math.random() * MAX_RADIUS) + 1;
	}


	Entity_Bomb.getCount = function getCount() {

		return count;
	}


	Entity_Bomb.prototype = Object.create(Entity.prototype);
	Entity_Bomb.prototype.constructor = Entity;
	Entity_Bomb.prototype.color = 'red';
	Entity_Bomb.prototype.name = 'Bomb';


	Entity_Bomb.prototype.inspect = function() {

		this.count++;
		return "This looks like it could reach " + this.radius + " away!";
	}


	Entity_Bomb.prototype.explode = function() {
		 
		 // Explode
	}


	root.Entity_Bomb = Entity_Bomb;
})(window);
