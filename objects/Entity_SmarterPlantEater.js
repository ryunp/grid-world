(function(root) {

	var count = 0;

	function Entity_SmarterPlantEater() {
			
		Entity.call(this);
		count++;

		this.direction = randomElement(Object.keys(Grid.Directions));
	}


	Entity_SmarterPlantEater.prototype = Object.create(Entity.prototype);
	Entity_SmarterPlantEater.prototype.constructor = Entity;
	Entity_SmarterPlantEater.prototype.name= "SmarterPlantEater";


	Entity_PlantEater.prototype.act = function act(view) {

		this.updateColor();

		var space = view.find(Entity_Empty);	
		var plant = view.find(Entity_Plant);
		console.log(this.name + " looks for " + Entity_Plant.name);
		var nearest = view.findNearest(Entity_Plant);

		if (this.energy > (this.MAX_ENERGY / 2)) {
			
			if (space && getLucky())
				return {'type': 'reproduce', 'direction': space};
		}

		if (plant)
			return {'type': 'eat', 'direction': plant};

		if (space)
			return {'type': 'move', 'direction': space};

		return;


		function getLucky() {
			
			return Math.floor(Math.random() * 40) < 1;
		}
	};


	root.Entity_SmarterPlantEater = Entity_SmarterPlantEater;
})(window);

