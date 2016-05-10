(function(root) {

	var count = 0;


	function Entity_Plant() {

		Entity.call(this);
		count++;

		this.MAX_ENERGY = 20

		this.energy = (this.MAX_ENERGY * 0.05) + (Math.random() * (this.MAX_ENERGY * 0.10));
	}


	Entity_Plant.getCount = function getCount() {

		return count;
	}


	Entity_Plant.prototype = Object.create(Entity.prototype);
	Entity_Plant.prototype.constructor = Entity;
	Entity_Plant.prototype.color = '#00aa00';
	Entity_Plant.prototype.name = "Plant";


	Entity_Plant.prototype.act = function act(view) {

		if (this.energy > this.MAX_ENERGY * 0.75) {

			var space = view.find(Entity_Empty);

			if (space && getLucky())
				return {'type': 'reproduce', 'direction': space}

		}

		if (this.energy < this.MAX_ENERGY)
			return {'type': 'grow'};
			

		function getLucky() {
			
			return Math.floor(Math.random() * 20) < 1;
		}
	};


	root.Entity_Plant = Entity_Plant;
})(window);