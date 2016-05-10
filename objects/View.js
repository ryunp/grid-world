(function(root) {

	function View(world, vector) {

		this.world = world;
		this.vector = vector;
	}


	View.prototype.look = function look(dir) {

		var target = this.vector.plus(Grid.Directions[dir]);

		if (this.world.grid.isInside(target))
			return this.world.grid.get(target);
	};


	View.prototype.findAll = function findAll(entity) {

		var found = [];

		for (var dir in Grid.Directions)
			if (this.look(dir) instanceof entity)
				found.push(dir);

		return found;
	};

	View.prototype.findNearest = function findNearest(entityType) {

		this.world.grid.forEach(calcDistance, this);

		//var ;

		function calcDistance(entity, vector) {

			if (entity == entityType) {
				console.log(entity, " instanceof ", entityType);
				var rise = Math.abs(this.vector.y - vector.y);
				var run = Math.abs(this.vector.x - vector.x);
				var dist = Math.sqrt(this.vector.x*2 + this.vector.y*2);

			}
			
			//console.log(entity.name + " sees a " + entityType.name + " " + dist + " away!");
		}
	}


	View.prototype.find = function find(entity) {

		var search = this.findAll(entity);
		var count = search.length;

		if (count)
			return randomElement(search);
	};
	

	root.View = View;
})(window);