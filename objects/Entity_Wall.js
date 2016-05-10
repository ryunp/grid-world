(function(root) {

	var count = 0;


	function Entity_Wall(type) {

		Entity.call(this);
		count++;
		
		this.type = type || randomElement(Entity_Wall.Types);
	}


	Entity_Wall.Types = [
		'mud',
		'wood',
		'stone',
		'metal'
	];


	Entity_Wall.getCount = function getCount() {
		return count;
	}


	Entity_Wall.prototype = Object.create(Entity.prototype);
	Entity_Wall.prototype.constructor = Entity;
	Entity_Wall.prototype.color = '#5D3619';
	Entity_Wall.prototype.Name = "Wall";


	Entity_Wall.prototype.inspect = function inspect(view) {

		return "this looks like a " + this.type + " wall!";
	}


	root.Entity_Wall = Entity_Wall;
})(window);